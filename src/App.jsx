import { useState, useEffect, useRef } from "react";
import { allChurches } from "./churches.js";

function getPaymentRef(church) {
  return `DAR-${String(church.id).padStart(4, "0")}`;
}

const amounts = [50, 100, 200, 500];

function getDistance(a, b, c, d) {
  const R = 6371;
  const x = ((c - a) * Math.PI) / 180;
  const y = ((d - b) * Math.PI) / 180;
  const z = Math.sin(x / 2) ** 2 + Math.cos((a * Math.PI) / 180) * Math.cos((c * Math.PI) / 180) * Math.sin(y / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(z), Math.sqrt(1 - z));
}

function formatDist(km) {
  if (km < 1) return Math.round(km * 1000) + " m";
  if (km < 10) return km.toFixed(1) + " km";
  return Math.round(km) + " km";
}

const App = () => {
  const [screen, setScreen] = useState("splash");
  const [search, setSearch] = useState("");
  const [selectedChurch, setSelectedChurch] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState("dar");
  const [animateIn, setAnimateIn] = useState(false);
  const [userLoc, setUserLoc] = useState(null);
  const [viewMode, setViewMode] = useState("list");
  const [expandedReading, setExpandedReading] = useState(null);
  const [mainTab, setMainTab] = useState("kostely");
  const [liturgy, setLiturgy] = useState(null);
  const [liturgyLoading, setLiturgyLoading] = useState(true);
  const [liturgyError, setLiturgyError] = useState(false);
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    fetch("/api/liturgie")
      .then(r => r.json())
      .then(data => {
        if (data.sections?.length > 0) {
          setLiturgy(data);
        } else {
          setLiturgyError(true);
        }
        setLiturgyLoading(false);
      })
      .catch(() => {
        setLiturgyError(true);
        setLiturgyLoading(false);
      });
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (p) => setUserLoc({ lat: p.coords.latitude, lng: p.coords.longitude }),
        () => setUserLoc({ lat: 50.176, lng: 14.867 }),
        { timeout: 8000 }
      );
    } else {
      setUserLoc({ lat: 50.176, lng: 14.867 });
    }
  }, []);

  useEffect(() => {
    if (screen === "splash") {
      const t = setTimeout(() => { setScreen("home"); setTimeout(() => setAnimateIn(true), 50); }, 2200);
      return () => clearTimeout(t);
    }
  }, [screen]);

  useEffect(() => {
    if (screen !== "splash") {
      setAnimateIn(false);
      const t = setTimeout(() => setAnimateIn(true), 50);
      return () => clearTimeout(t);
    }
  }, [screen, selectedChurch, mainTab]);

  const churches = userLoc
    ? allChurches.map(ch => ({ ...ch, distance: getDistance(userLoc.lat, userLoc.lng, ch.lat, ch.lng) })).sort((a, b) => a.distance - b.distance)
    : allChurches.map(ch => ({ ...ch, distance: null }));

  const filtered = churches.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.city.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (viewMode !== "map" || !mapRef.current || !userLoc || mainTab !== "kostely" || selectedChurch) return;
    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css";
      document.head.appendChild(link);
    }
    const initMap = () => {
      if (mapInstanceRef.current) { mapInstanceRef.current.remove(); mapInstanceRef.current = null; }
      const L = window.L;
      const map = L.map(mapRef.current).setView([userLoc.lat, userLoc.lng], 10);
      mapInstanceRef.current = map;
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "OpenStreetMap" }).addTo(map);
      const userIcon = L.divIcon({ html: '<div style="width:16px;height:16px;background:#4A90D9;border:3px solid #fff;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,.3)"></div>', iconSize: [16, 16], className: "" });
      L.marker([userLoc.lat, userLoc.lng], { icon: userIcon }).addTo(map);
      markersRef.current.forEach(m => map.removeLayer(m));
      markersRef.current = [];
      const ci = L.divIcon({ html: '<div style="width:30px;height:30px;background:#C8943E;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 8px rgba(0,0,0,.25);display:flex;align-items:center;justify-content:center;font-size:15px">+</div>', iconSize: [30, 30], className: "" });
      filtered.slice(0, 15).forEach(ch => {
        const dist = ch.distance ? formatDist(ch.distance) : "";
        const popup = '<div style="font-family:sans-serif;min-width:170px"><strong>' + ch.name + '</strong><br/><span style="color:#666;font-size:12px">' + ch.city + ' ' + dist + '</span><br/><button onclick="window.__selectChurch(' + ch.id + ')" style="margin-top:8px;padding:7px 16px;background:#C8943E;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:13px;font-weight:600">Otevrit</button></div>';
        const m = L.marker([ch.lat, ch.lng], { icon: ci }).addTo(map).bindPopup(popup);
        markersRef.current.push(m);
      });
      if (filtered.length > 0) {
        const b = L.latLngBounds(filtered.slice(0, 15).map(ch => [ch.lat, ch.lng]));
        b.extend([userLoc.lat, userLoc.lng]);
        map.fitBounds(b, { padding: [40, 40] });
      }
    };
    if (window.L) setTimeout(initMap, 100);
    else {
      const scr = document.createElement("script");
      scr.src = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js";
      scr.onload = () => setTimeout(initMap, 100);
      document.head.appendChild(scr);
    }
    return () => { if (mapInstanceRef.current) { mapInstanceRef.current.remove(); mapInstanceRef.current = null; } };
  }, [viewMode, userLoc, search, mainTab, selectedChurch]);

  useEffect(() => {
    window.__selectChurch = (id) => {
      const ch = churches.find(c => c.id === id);
      if (ch) { setSelectedChurch(ch); setActiveTab("dar"); }
    };
    return () => delete window.__selectChurch;
  }, [churches]);

  const finalAmount = selectedAmount || (customAmount ? parseInt(customAmount) : 0);

  const handleDonate = () => {
    if (finalAmount > 0) {
      setShowSuccess(true);
      setTimeout(() => { setShowSuccess(false); setSelectedAmount(null); setCustomAmount(""); setActiveTab("dar"); }, 3000);
    }
  };

  const goHome = () => {
    setSelectedChurch(null);
    setSelectedAmount(null);
    setCustomAmount("");
    setActiveTab("dar");
    setExpandedReading(null);
  };

  if (screen === "splash") return (
    <div style={st.splashWrap}><style>{css}</style>
      <div style={st.splashContent}>
        <div style={st.splashIcon}>&#10013;</div>
        <div style={st.splashTitle}>Farni Dar</div>
        <div style={st.splashSub}>Podporte svou farnost jednoduse</div>
        <div style={st.splashLoader}><div style={st.splashLoaderBar} /></div>
      </div>
    </div>
  );

  if (showSuccess) return (
    <div style={st.successWrap}><style>{css}</style>
      <div style={{ fontSize: 64, marginBottom: 16, animation: "gentleFloat 3s ease-in-out infinite" }}>&#128330;&#65039;</div>
      <div style={st.successTitle}>Dekujeme!</div>
      <div style={st.successText}>Vas dar {finalAmount} Kc pro {selectedChurch?.name} byl prijat.</div>
      <div style={st.successVerse}>
        &bdquo;Kazdy at dava podle toho, jak se ve svem srdci predem rozhodl.&ldquo;
        <br /><span style={st.verseRef}>2. Korintskym 9:7</span>
      </div>
    </div>
  );

  if (selectedChurch) return (
    <div style={st.app}><style>{css}</style>
      <div style={{ ...st.detailWrap, opacity: animateIn ? 1 : 0, transform: animateIn ? "translateY(0)" : "translateY(12px)", transition: "all .4s ease" }}>
        <div style={st.detailHeader}>
          <button onClick={goHome} style={st.backBtn}>&#8592; Zpet</button>
        </div>
        <div style={st.detailHero}>
          <div style={{ fontSize: 48, marginBottom: 10 }}>&#9962;</div>
          <h1 style={st.detailName}>{selectedChurch.name}</h1>
          <p style={st.detailCity}>
            {selectedChurch.city}
            {selectedChurch.distance != null && <span style={st.distHL}> &middot; {formatDist(selectedChurch.distance)}</span>}
          </p>
          <p style={st.detailAddr}>{selectedChurch.address}</p>
          <p style={st.detailDiocese}>{selectedChurch.diocese}</p>
        </div>
        <div style={st.tabRow}>
          {["dar", "info"].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              style={{ ...st.tab, ...(activeTab === tab ? st.tabActive : {}) }}>
              {tab === "dar" ? "Prispet" : "O farnosti"}
            </button>
          ))}
        </div>
        {activeTab === "dar" ? (
          <div style={st.donateSection}>
            <p style={st.donateLabel}>Vyberte castku:</p>
            <div style={st.amountGrid}>
              {amounts.map(a => (
                <button key={a} onClick={() => { setSelectedAmount(a); setCustomAmount(""); }}
                  style={{ ...st.amountBtn, ...(selectedAmount === a ? st.amountBtnActive : {}) }}>
                  {a} Kc
                </button>
              ))}
            </div>
            <div style={st.customRow}>
              <span style={st.customLabel}>Jina castka:</span>
              <div style={st.customInputWrap}>
                <input type="number" placeholder="0" value={customAmount}
                  onChange={e => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                  style={st.customInput} />
                <span style={st.customCurr}>Kc</span>
              </div>
            </div>
            <button onClick={handleDonate} disabled={finalAmount <= 0}
              style={{ ...st.donateBtn, ...(finalAmount <= 0 ? st.donateBtnOff : {}) }}>
              {finalAmount > 0 ? `Darovat ${finalAmount} Kc` : "Vyberte castku"}
            </button>
            <div style={st.paymentRefBox}>
              <span style={st.paymentRefLabel}>Reference platby:</span>
              <span style={st.paymentRefValue}>{getPaymentRef(selectedChurch)}</span>
              <span style={st.paymentRefSub}>— {selectedChurch.name}</span>
            </div>
            <p style={st.donateNote}>Zabezpecena platba · Prototyp – platba neni realna</p>
          </div>
        ) : (
          <div style={st.infoSection}>
            {[
              { icon: "\u{1F464}", label: "Farar", val: selectedChurch.pastor },
              { icon: "\u{1F550}", label: "Bohosluzby", val: selectedChurch.masses },
              { icon: "\u{1F4CD}", label: "Adresa", val: selectedChurch.address + ", " + selectedChurch.city },
              { icon: "\u{1F4DE}", label: "Telefon", val: selectedChurch.phone },
              { icon: "\u26EA", label: "Dieceze", val: selectedChurch.diocese },
            ].map((item, i) => (
              <div key={i} style={st.infoCard}>
                <div style={st.infoIcon}>{item.icon}</div>
                <div>
                  <div style={st.infoLabel}>{item.label}</div>
                  {Array.isArray(item.val)
                    ? item.val.map((v, j) => <div key={j} style={st.infoVal}>{v}</div>)
                    : <div style={st.infoVal}>{item.val}</div>
                  }
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div style={st.app}><style>{css}</style>
      <div style={{ ...st.homeWrap, opacity: animateIn ? 1 : 0, transform: animateIn ? "translateY(0)" : "translateY(12px)", transition: "all .45s ease" }}>
        <div style={st.homeHeader}>
          <div style={st.logo}>&#10013;</div>
          <h1 style={st.homeTitle}>Farni Dar</h1>
          <p style={st.homeSub}>Podporte svou farnost platbou z mobilu.</p>
          <p style={{ fontSize: 12, color: c.soft, marginTop: 4, padding: "0 24px" }}>
            Najdete svuj kostel a prispejte par kliknutimi misto hotovosti.
          </p>
        </div>
        <div style={st.bottomNav}>
          <button onClick={() => { setMainTab("liturgie"); setExpandedReading(null); }}
            style={{ ...st.navBtn, ...(mainTab === "liturgie" ? st.navBtnActive : {}) }}>
            <span style={st.navIcon}>{"\u{1F4D6}"}</span>
            <span style={{ ...st.navLabel, ...(mainTab === "liturgie" ? { color: "#96701F" } : {}) }}>Liturgie</span>
          </button>
          <button onClick={() => setMainTab("kostely")}
            style={{ ...st.navBtn, ...(mainTab === "kostely" ? st.navBtnActive : {}) }}>
            <span style={st.navIcon}>{"\u26EA"}</span>
            <span style={{ ...st.navLabel, ...(mainTab === "kostely" ? { color: "#96701F" } : {}) }}>Kostely</span>
          </button>
        </div>

        {mainTab === "liturgie" ? (
          <div style={st.liturgySection}>
            {liturgyLoading ? (
              <div style={{ textAlign: "center", padding: "48px 0", color: c.soft }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>&#128214;</div>
                <div>Nacitam cteni pro tuto nedeli...</div>
              </div>
            ) : liturgyError || !liturgy ? (
              <div style={{ textAlign: "center", padding: "48px 20px", color: c.soft }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>&#128591;</div>
                <div style={{ marginBottom: 16 }}>Cteni se nepodarilo nacist.</div>
                <a href="https://www.vira.cz/Nedelni-liturgie" target="_blank" rel="noopener noreferrer" style={st.sourceLink}>
                  Otevrit cteni na vira.cz &#8594;
                </a>
              </div>
            ) : (
              <>
                <div style={st.liturgyHeader}>
                  <div style={st.liturgyColorDot} />
                  <div>
                    <div style={st.liturgyTitle}>{liturgy.title}</div>
                    {liturgy.date ? <div style={st.liturgyDate}>{liturgy.date}</div> : null}
                  </div>
                </div>
                {liturgy.sections.map((sec, i) => {
                  const isOpen = expandedReading === i;
                  return (
                    <div key={i} style={st.readingCard}>
                      <button onClick={() => setExpandedReading(isOpen ? null : i)} style={st.readingHeader}>
                        <div>
                          <div style={st.readingType}>{sec.type}</div>
                          <div style={st.readingRef}>{sec.ref}</div>
                        </div>
                        <div style={st.readingChevron}>{isOpen ? "&#9650;" : "&#9660;"}</div>
                      </button>
                      {isOpen && (
                        <div style={st.readingBody}>
                          {sec.intro ? <p style={st.readingIntro}>{sec.intro}</p> : null}
                          <div style={st.readingDivider} />
                          <p style={st.readingText}>{sec.text}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
                <a href="https://www.vira.cz/Nedelni-liturgie" target="_blank" rel="noopener noreferrer" style={st.sourceLink}>
                  Cela liturgie na vira.cz &#8594;
                </a>
              </>
            )}
          </div>
        ) : (
          <>
            <div style={st.searchWrap}>
              <input type="text" placeholder="Hledat kostel nebo mesto..." value={search}
                onChange={e => setSearch(e.target.value)} style={st.searchInput} />
              {search && <button onClick={() => setSearch("")} style={st.clearBtn}>&#10005;</button>}
            </div>
            <div style={st.toggleRow}>
              <button onClick={() => setViewMode("list")}
                style={{ ...st.toggleBtn, ...(viewMode === "list" ? st.toggleOn : {}) }}>Seznam</button>
              <button onClick={() => setViewMode("map")}
                style={{ ...st.toggleBtn, ...(viewMode === "map" ? st.toggleOn : {}) }}>Mapa</button>
            </div>
            {viewMode === "map" ? (
              <div style={st.mapBox}><div ref={mapRef} style={st.mapInner} /></div>
            ) : (
              <div style={st.listWrap}>
                {filtered.length === 0 ? (
                  <div style={st.empty}>
                    <p style={{ fontSize: 16 }}>Zadny kostel nenalezen</p>
                    <p style={{ fontSize: 13, opacity: 0.6, marginTop: 4 }}>Zkuste jiny nazev nebo mesto</p>
                  </div>
                ) : filtered.map((ch, i) => (
                  <button key={ch.id} onClick={() => { setSelectedChurch(ch); setActiveTab("dar"); }}
                    style={{ ...st.card, animationDelay: `${i * 0.05}s` }}>
                    <div style={st.cardEmoji}>{"\u26EA"}</div>
                    <div style={st.cardInfo}>
                      <div style={st.cardName}>{ch.name}</div>
                      <div style={st.cardCity}>{ch.city} &middot; {ch.address}</div>
                    </div>
                    <div style={st.cardMeta}>
                      {ch.distance != null && <div style={st.distBadge}>{formatDist(ch.distance)}</div>}
                      <div style={st.cardArrow}>&#8250;</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
    </div>
            )}
          </>
        )}
        <div style={{ textAlign: "center", padding: "16px 20px 8px", borderTop: "1px solid #EDE6DB", marginTop: 8 }}>
          <a href="/podminky" style={{ fontSize: 12, color: c.soft, textDecoration: "none", marginRight: 16 }}>Obchodní podmínky</a>
          <a href="/kontakt" style={{ fontSize: 12, color: c.soft, textDecoration: "none" }}>Kontakt</a>
        </div>
  );
};

const css = `
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600&display=swap');
* { box-sizing: border-box; margin: 0; padding: 0; }
@keyframes fadeSlideUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
@keyframes splashPulse { 0%, 100% { transform: scale(1); opacity: 0.9; } 50% { transform: scale(1.08); opacity: 1; } }
@keyframes loaderGrow { from { width: 0%; } to { width: 100%; } }
@keyframes gentleFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
input[type=number] { -moz-appearance: textfield; }
.leaflet-popup-content-wrapper { border-radius: 12px !important; }
`;

const c = {
  bg: "#FAF6F1", card: "#FFFFFF", gold: "#C8943E", goldL: "#F5EBD7", goldD: "#96701F",
  text: "#2D2418", soft: "#7A6E5E", accent: "#8B5E3C", bdr: "#EDE6DB",
  ok: "#4A7C59", okBg: "#E8F2EB"
};

const st = {
  splashWrap: { height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(160deg, #1A150E 0%, #3D2A14 50%, #5C3D1E 100%)", fontFamily: "'Crimson Pro', serif" },
  splashContent: { textAlign: "center", color: "#FAF6F1" },
  splashIcon: { fontSize: 72, marginBottom: 20, animation: "splashPulse 2s ease-in-out infinite" },
  splashTitle: { fontSize: 40, fontWeight: 700, letterSpacing: 2, textShadow: "0 2px 12px rgba(0,0,0,.4)" },
  splashSub: { fontSize: 17, marginTop: 12, fontFamily: "'DM Sans', sans-serif", color: "#E8D5B8", letterSpacing: 0.3 },
  splashLoader: { width: 140, height: 3, background: "rgba(255,255,255,.15)", borderRadius: 2, margin: "28px auto 0", overflow: "hidden" },
  splashLoaderBar: { height: "100%", background: "#C8943E", borderRadius: 2, animation: "loaderGrow 2s ease-in-out forwards" },
  successWrap: { height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: c.okBg, fontFamily: "'DM Sans', sans-serif", padding: 32, textAlign: "center" },
  successTitle: { fontSize: 28, fontWeight: 700, color: c.ok, fontFamily: "'Crimson Pro', serif" },
  successText: { fontSize: 16, color: c.text, marginTop: 8, maxWidth: 280 },
  successVerse: { marginTop: 32, fontSize: 14, fontStyle: "italic", color: c.soft, maxWidth: 260, lineHeight: 1.6 },
  verseRef: { fontStyle: "normal", fontWeight: 600, fontSize: 12, opacity: 0.7 },
  app: { minHeight: "100vh", background: c.bg, fontFamily: "'DM Sans', sans-serif", maxWidth: 480, margin: "0 auto" },
  homeWrap: { padding: "0 0 32px" },
  homeHeader: { textAlign: "center", padding: "40px 24px 16px", background: "linear-gradient(180deg, #F5EBD7 0%, #FAF6F1 100%)" },
  logo: { fontSize: 36, color: c.gold, marginBottom: 4 },
  homeTitle: { fontSize: 26, fontWeight: 700, color: c.text, fontFamily: "'Crimson Pro', serif" },
  homeSub: { fontSize: 13, color: c.soft, marginTop: 4 },
  bottomNav: { display: "flex", margin: "8px 20px 16px", background: c.card, borderRadius: 14, border: "1.5px solid #EDE6DB", overflow: "hidden" },
  navBtn: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2, padding: "12px 0", background: "none", border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", transition: "all .2s" },
  navBtnActive: { background: c.goldL },
  navIcon: { fontSize: 22 },
  navLabel: { fontSize: 12, fontWeight: 600, color: c.soft },
  searchWrap: { margin: "0 20px 12px", position: "relative" },
  searchInput: { width: "100%", padding: "13px 16px", fontSize: 15, border: "1.5px solid #EDE6DB", borderRadius: 14, outline: "none", background: c.card, color: c.text, fontFamily: "'DM Sans', sans-serif" },
  clearBtn: { position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", fontSize: 16, color: c.soft, cursor: "pointer" },
  toggleRow: { display: "flex", gap: 8, margin: "0 20px 16px" },
  toggleBtn: { flex: 1, padding: "10px 0", fontSize: 14, fontWeight: 500, background: c.card, border: "1.5px solid #EDE6DB", borderRadius: 10, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", color: c.soft, transition: "all .2s" },
  toggleOn: { background: c.goldL, borderColor: c.gold, color: c.goldD, fontWeight: 600 },
  mapBox: { margin: "0 20px", borderRadius: 16, overflow: "hidden", border: "1.5px solid #EDE6DB" },
  mapInner: { width: "100%", height: 420 },
  listWrap: { padding: "0 20px" },
  card: { display: "flex", alignItems: "center", width: "100%", padding: "14px", marginBottom: 8, background: c.card, border: "1px solid #EDE6DB", borderRadius: 14, cursor: "pointer", textAlign: "left", fontFamily: "'DM Sans', sans-serif", animation: "fadeSlideUp .4s ease both" },
  cardEmoji: { fontSize: 28, marginRight: 12, flexShrink: 0 },
  cardInfo: { flex: 1, minWidth: 0 },
  cardName: { fontSize: 14, fontWeight: 600, color: c.text, marginBottom: 2 },
  cardCity: { fontSize: 12, color: c.soft, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
  cardMeta: { display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4, marginLeft: 8, flexShrink: 0 },
  distBadge: { fontSize: 11, fontWeight: 600, color: c.gold, background: c.goldL, padding: "3px 8px", borderRadius: 8 },
  distHL: { fontWeight: 500, color: c.gold },
  cardArrow: { fontSize: 20, color: c.gold, fontWeight: 300 },
  empty: { textAlign: "center", padding: "48px 0", color: c.soft },
  detailWrap: { padding: "0 0 40px" },
  detailHeader: { padding: "16px 20px 0" },
  backBtn: { background: "none", border: "none", fontSize: 15, color: c.gold, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, padding: "8px 0" },
  detailHero: { textAlign: "center", padding: "16px 24px 24px", background: "linear-gradient(180deg, #F5EBD7 0%, #FAF6F1 100%)" },
  detailName: { fontSize: 21, fontWeight: 700, color: c.text, fontFamily: "'Crimson Pro', serif" },
  detailCity: { fontSize: 15, color: c.soft, marginTop: 4 },
  detailAddr: { fontSize: 13, color: c.soft, marginTop: 2 },
  detailDiocese: { fontSize: 12, color: c.gold, marginTop: 6, fontWeight: 500 },
  tabRow: { display: "flex", margin: "0 20px", borderBottom: "2px solid #EDE6DB" },
  tab: { flex: 1, padding: "12px 0", background: "none", border: "none", fontSize: 14, fontWeight: 500, color: c.soft, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", borderBottom: "2px solid transparent", marginBottom: -2 },
  tabActive: { color: c.gold, borderBottomColor: c.gold, fontWeight: 600 },
  donateSection: { padding: "24px 20px" },
  donateLabel: { fontSize: 15, fontWeight: 600, color: c.text, marginBottom: 14 },
  amountGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 },
  amountBtn: { padding: "16px 0", fontSize: 17, fontWeight: 600, textAlign: "center", background: c.card, border: "1.5px solid #EDE6DB", borderRadius: 12, cursor: "pointer", color: c.text, fontFamily: "'DM Sans', sans-serif", transition: "all .2s" },
  amountBtnActive: { background: c.goldL, borderColor: c.gold, color: c.goldD },
  customRow: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 },
  customLabel: { fontSize: 14, color: c.soft },
  customInputWrap: { display: "flex", alignItems: "center", gap: 6 },
  customInput: { width: 90, padding: "10px 12px", fontSize: 16, fontWeight: 600, border: "1.5px solid #EDE6DB", borderRadius: 10, outline: "none", textAlign: "right", fontFamily: "'DM Sans', sans-serif", color: c.text, background: c.card },
  customCurr: { fontSize: 14, color: c.soft, fontWeight: 500 },
  donateBtn: { width: "100%", padding: "16px 0", fontSize: 16, fontWeight: 600, background: "linear-gradient(135deg, #C8943E, #8B5E3C)", color: "#fff", border: "none", borderRadius: 14, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", letterSpacing: 0.3 },
  donateBtnOff: { opacity: 0.45, cursor: "default" },
  donateNote: { textAlign: "center", fontSize: 12, color: c.soft, marginTop: 14 },
  paymentRefBox: { background: c.goldL, borderRadius: 10, padding: "10px 14px", marginTop: 12, marginBottom: 4, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 6 },
  paymentRefLabel: { fontSize: 11, color: c.soft, textTransform: "uppercase", letterSpacing: 0.5 },
  paymentRefValue: { fontSize: 13, fontWeight: 700, color: c.goldD, fontFamily: "monospace" },
  paymentRefSub: { fontSize: 12, color: c.soft, fontStyle: "italic" },
  liturgySection: { padding: "0 20px 32px" },
  liturgyHeader: { display: "flex", alignItems: "flex-start", gap: 14, padding: "16px", background: c.card, border: "1px solid #EDE6DB", borderRadius: 14, marginBottom: 16 },
  liturgyColorDot: { width: 20, height: 20, borderRadius: 10, background: "#fff", border: "2px solid #C8943E", flexShrink: 0, marginTop: 4, boxShadow: "0 0 8px rgba(200,148,62,.3)" },
  liturgyTitle: { fontSize: 17, fontWeight: 700, color: c.text, fontFamily: "'Crimson Pro', serif", lineHeight: 1.3 },
  liturgyDate: { fontSize: 12, color: c.soft, marginTop: 4 },
  readingCard: { marginBottom: 10, borderRadius: 12, border: "1px solid #EDE6DB", background: c.card, overflow: "hidden" },
  readingHeader: { display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "14px 16px", background: "none", border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", textAlign: "left" },
  readingType: { fontSize: 13, fontWeight: 600, color: c.gold, textTransform: "uppercase", letterSpacing: 0.5 },
  readingRef: { fontSize: 14, fontWeight: 500, color: c.text, marginTop: 2 },
  readingChevron: { fontSize: 12, color: c.soft, flexShrink: 0, marginLeft: 8 },
  readingBody: { padding: "0 16px 16px" },
  readingIntro: { fontSize: 13, color: c.accent, fontStyle: "italic", lineHeight: 1.5, marginBottom: 10, fontFamily: "'Crimson Pro', serif" },
  readingDivider: { height: 1, background: c.bdr, margin: "0 0 12px" },
  readingText: { fontSize: 14, color: c.text, lineHeight: 1.7, whiteSpace: "pre-line", fontFamily: "'Crimson Pro', serif" },
  sourceLink: { display: "block", textAlign: "center", fontSize: 13, color: c.gold, fontWeight: 600, textDecoration: "none", marginTop: 16, padding: "12px", background: c.goldL, borderRadius: 10 },
  infoSection: { padding: "20px 20px" },
  infoCard: { display: "flex", alignItems: "flex-start", gap: 14, padding: "14px", marginBottom: 8, background: c.card, border: "1px solid #EDE6DB", borderRadius: 12 },
  infoIcon: { fontSize: 22, flexShrink: 0, marginTop: 2 },
  infoLabel: { fontSize: 11, color: c.soft, marginBottom: 2, textTransform: "uppercase", letterSpacing: 0.5 },
  infoVal: { fontSize: 14, color: c.text, fontWeight: 500 },
};

export default App;

