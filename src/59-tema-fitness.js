<style>
/* =========================================================
   TEMA FITNESS — si attiva con il profilo «alleno» (html[data-profilo="allena"]).
   Stessi componenti, altri colori e altri titoli.
   ========================================================= */
html[data-profilo="allena"]{
  --paper:#F2F3F1; --surface:#FFFFFF; --surface-2:#F7F8F6;
  --ink:#0F1412; --muted:#4F5A57; --faint:#8A938F;
  --line:#D9DDDA; --line-soft:#E8EBE9;
  --muscle:#E4552B; --muscle-soft:#FBE3DA;
  --fascia:#0E9A74; --fascia-soft:#D9F1E8;
  --bone:#8A7B5C; --bone-soft:#EEE9DC;
  --nerve:#D29A00; --nerve-soft:#F8ECC8;
  --joint:#2458D6; --joint-soft:#DCE4FA;
  --figure:#E1E5E2; --figure-line:#C5CCC8;
  --ok:#1C9D5C;
  --display:"Barlow Condensed","Archivo Narrow","Arial Narrow",Impact,sans-serif;
}
@media (prefers-color-scheme:dark){html[data-profilo="allena"]:not([data-theme="light"]){
  --paper:#0B0D10; --surface:#14181D; --surface-2:#1A1F26;
  --ink:#F1F4F6; --muted:#A2ACB4; --faint:#73808A;
  --line:#262C34; --line-soft:#1E242B;
  --muscle:#FF6B3D; --muscle-soft:#3A2119;
  --fascia:#2BE2A8; --fascia-soft:#0F3328;
  --bone:#D8CBA8; --bone-soft:#2A2720;
  --nerve:#FFC93D; --nerve-soft:#332B12;
  --joint:#5E8FFF; --joint-soft:#162342;
  --figure:#20262D; --figure-line:#333B45;
  --ok:#3FD98A;
}}
html[data-profilo="allena"][data-theme="dark"]{
  --paper:#0B0D10; --surface:#14181D; --surface-2:#1A1F26;
  --ink:#F1F4F6; --muted:#A2ACB4; --faint:#73808A;
  --line:#262C34; --line-soft:#1E242B;
  --muscle:#FF6B3D; --muscle-soft:#3A2119;
  --fascia:#2BE2A8; --fascia-soft:#0F3328;
  --bone:#D8CBA8; --bone-soft:#2A2720;
  --nerve:#FFC93D; --nerve-soft:#332B12;
  --joint:#5E8FFF; --joint-soft:#162342;
  --figure:#20262D; --figure-line:#333B45;
  --ok:#3FD98A;
}
/* titoli: condensati, pesanti, maiuscoli */
html[data-profilo="allena"] h1,html[data-profilo="allena"] h2{font-weight:800;text-transform:uppercase;letter-spacing:.01em;line-height:1.02}
html[data-profilo="allena"] h3{font-weight:700;letter-spacing:.005em}
html[data-profilo="allena"] .brand b{font-family:var(--display);font-weight:800;text-transform:uppercase;letter-spacing:.04em;font-size:1.08em}
html[data-profilo="allena"] .eyebrow{font-family:var(--display);font-size:12px;letter-spacing:.14em;font-weight:600;color:var(--muscle)}
html[data-profilo="allena"] .seg{font-family:var(--display);font-weight:700;text-transform:uppercase;letter-spacing:.08em}
/* superfici e pulsanti: angoli netti, bordo d'accento */
html[data-profilo="allena"] .card{border-radius:8px;border-left:3px solid var(--muscle)}
html[data-profilo="allena"] .card.porta{border-left-width:4px}
html[data-profilo="allena"] .btn{border-radius:6px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;font-size:12.5px}
html[data-profilo="allena"] .btn.primary{background:var(--muscle);border-color:var(--muscle);color:#fff}
html[data-profilo="allena"] .chip{border-radius:6px;text-transform:uppercase;letter-spacing:.05em;font-size:11.5px;font-weight:600}
html[data-profilo="allena"] .chip.on{background:var(--muscle);border-color:var(--muscle);color:#fff}
html[data-profilo="allena"] .pill{border-radius:6px;font-weight:600}
html[data-profilo="allena"] .bar i{background:var(--fascia)}
html[data-profilo="allena"] .secret{border-left:4px solid var(--nerve)}
html[data-profilo="allena"] .secret .lbl{font-family:var(--display);text-transform:uppercase;letter-spacing:.1em;font-weight:700}
html[data-profilo="allena"] .topbar{border-bottom:2px solid var(--muscle)}
html[data-profilo="allena"] dt{font-family:var(--display);text-transform:uppercase;letter-spacing:.06em;font-weight:700;font-size:12.5px}
</style>
