// English text lives in index.html; this file only holds Uzbek and Russian.
// NOTE: first-draft translations, need native-speaker review (same status as the bot texts).
const T = {
uz: {
 nav_how:"Qanday ishlaydi", nav_features:"Imkoniyatlar", nav_data:"Ma'lumotlar", nav_honesty:"Halollik", nav_next:"Keyingi qadam",
 eyebrow:"NASA Space Apps 2026 · CST jamoasi",
 h1:"Bugun sug'orishim kerakmi?<br><span>Endi telefon javob beradi.</span>",
 lead:"Sho'r Radar NASA Yer ma'lumotlarini O'zbekiston fermerlari uchun bitta aniq kunlik signalga aylantiradi: sug'or, kuzat yoki kut. Shuningdek, sho'rlanish xavfini ko'rsatadi va sho'rga chidamli ekinlarni tavsiya qiladi. Telegram ichida, o'zbek, rus va ingliz tillarida ishlaydi.",
 cta_bot:"Telegram botni ochish", cta_how:"Qanday ishlashini ko'rish",
 hero_note:"Bu qaror qo'llab-quvvatlash vositasi, o'lchov emas. Sho'rni to'g'ridan-to'g'ri ko'rmaymiz, uning yig'ilishiga qulay sharoitlarni baholaymiz.",
 ph_today:"Bugun", ph_irrigate:"SUG'OR", ph_why:"Ildiz qatlamidagi tuproq quruq va keyingi 3 kunda yomg'ir kutilmaydi.",
 ph_wet:"Tuproq namligi", ph_rain:"Yomg'ir, 7 kun", ph_salt:"Sho'r xavfi", ph_med:"O'rta", ph_demo:"Namuna ekran.",
 prob_h:"Sho'r va suv tanqisligi hosilga zarar yetkazadi",
 st1:"O'zbekistonning sug'oriladigan yerlarining sho'rlangan qismi", st2:"Qoraqalpog'istonda sug'oriladigan yerlarning sho'rlangan ulushi", st3:"Sirdaryoda, bizning pilot hududlarimizdan biri",
 st_src:"E'lon qilingan hududiy statistika (Frontiers in Sustainable Food Systems, 2025). U hududlarni tavsiflaydi, alohida dalani emas. Ko'pchilik kichik fermerlarda tuproq datchiklari va agronomga oson murojaat imkoni yo'q.",
 how_h:"Qanday ishlaydi",
 s1h:"Hududingizni tanlang", s1p:"Qamrab olingan tumanni tanlang yoki joylashuvingizni yuboring. Dalani ekini, o'sish bosqichi, sizot suvi va drenaji bilan qo'shing.",
 s2h:"NASA ma'lumotlarini o'qiymiz", s2p:"NASA POWER'dan ildiz qatlami namligi, harorat, yog'in va quyosh nuri, Open-Meteo'dan 7 kunlik prognoz.",
 s3h:"Qoidalar qaror qiladi", s3p:"Evapotranspiratsiya va suv balansi ekin qoidalari bilan solishtiriladi. Barcha chegaralar bitta jadvalda ko'rinadi.",
 s4h:"Bitta javob olasiz", s4p:"Sug'or, kuzat yoki kut: tushunarli sabab, sho'r xavfi va yuvish hamda ekin bo'yicha maslahat bilan.",
 g_irr:"SUG'OR", g_irr_p:"Suv tanqisligi yuqori. Hozir sug'oring.", g_mon:"KUZAT", g_mon_p:"Chegaraga yaqin. Dalani yaqinda yana tekshiring.", g_wait:"KUT", g_wait_p:"Tuproq yetarli nam yoki yomg'ir kutilmoqda. Suvni tejang.",
 feat_h:"Ichida nimalar bor",
 f1h:"💧 Sug'orish maslahati", f1p:"Sabablari bilan kunlik sug'or / kuzat / kut signali. Sug'orishni qayd etsangiz, suv tanqisligi nolga tushadi.",
 f2h:"🧂 Sho'r xavfi ko'rsatkichi", f2p:"Sho'r yig'ilishiga qulay sharoitlarni baholaydi. O'lchangan ECe kiritsangiz, o'lchov bahoning o'rnini egallaydi.",
 f3h:"🚿 Yuvish vaqti", f3p:"Sharoit va oxirgi yuvishingizga qarab, yuvish qachon mantiqli bo'lishi haqida shartli maslahat.",
 f4h:"🌾 Sho'rga mos ekinlar", f4p:"FAO sho'rga chidamlilik kartalari, ustuvorliklaringiz (suv tanqisligi, yoqtirgan ekinlar) va sabablari bilan 3 bosqichli almashlab ekish g'oyasi.",
 f5h:"🗺️ Xarita paneli", f5p:"Pilot tumanlar va dalalaringiz signal rangida. OpenStreetMap, sun'iy yo'ldosh, NASA haqiqiy rang va MODIS o'simlik qatlami.",
 f6h:"📅 6 oylik ko'rinish", f6p:"Taxminan ikki yillik NASA ma'lumotlariga asoslangan mavsum rejasi. Bu iqlim o'rtachasi, prognoz emas.",
 f7h:"🤖 AI tushuntiruvchi", f7p:"Kichik Gemini modeli qoidalar natijasini sizning tilingizda oddiy so'zlar bilan tushuntiradi. U qoidalarni o'zgartirmaydi va faqat dalangiz faktlari asosida javob beradi.",
 f8h:"👥 Fermerlar hamjamiyati", f8p:"Hududingiz bo'yicha maslahat ulashing, yoqtiring, noto'g'rilarini xabar qiling. 3 ta shikoyat postni yashiradi. Tasdiqlangan agronom belgisi qo'llab-quvvatlanadi.",
 f9h:"⚠️ Ogohlantirishlar", f9p:"Sovuq va kuchli yomg'ir ogohlantirishlari hamda oddiy maslahat Telegramda yetkaziladi.",
 data_h:"Ma'lumotlar va usullar",
 d1h:"NASA va ochiq ma'lumotlar", d2h:"Usullar", d2c:"Barcha qoidalar bitta versiyalangan faylda, agronom ko'rib chiqquncha “vaqtinchalik” deb belgilangan", d2d:"“Bu qanday hal qilindi?” aynan qaysi qoida ishlaganini ko'rsatadi", d3h:"Qanday yaratilgan",
 hon_h:"Cheklovlari haqida halol",
 h1h:"Nimani da'vo qilmaymiz", h1a:"Sho'r kosmosdan o'lchanmaydi. Biz unga qulay sharoitlarni baholaymiz.", h1b:"NASA POWER to'ri taxminan 50 km, shuning uchun qo'shni dalalar o'xshash ko'rinadi.", h1c:"Chegaralar umumiy va hali agronom tomonidan ko'rib chiqilmagan.", h1d:"Aniqlik ko'rsatkichi da'vo qilinmaydi. Bu qaror qo'llab-quvvatlash vositasi.",
 h2h:"Nimani tekshirdik", h2p:"Qoidalarni uchta tumanda eng quruq va eng nam 30 kunlik davrlar uchun haqiqiy NASA ma'lumotlarida kunma-kun sinab ko'rdik. 6 ta tuman-mavsumning 6 tasida eng quruq davrda SUG'OR kunlari kamida shuncha bo'ldi va KUT kunlari ko'p bo'lmadi. O'rtacha tuproq namligi SUG'OR ≤ KUZAT ≤ KUT tartibida.",
 h2s:"Bu mantiqni tekshirish, dala sinovi emas.",
 h3h:"Chidamlilik va maxfiylik", h3a:"NASA ma'lumotlari keshlanadi; NASA ishlamasa “eskirgan” deb belgilanadi.", h3b:"Demo va eskirgan ma'lumotlar doim belgilanadi.", h3c:"So'rovlar Telegramning imzolangan kirish ma'lumotlari bilan tekshiriladi. Hisob va ma'lumotlaringizni o'chirishingiz mumkin.", h3d:"AI ga ism yoki Telegram ID yuborilmaydi.",
 rm_h:"Keyingi qadamlar",
 r1:"Kc qiymatlari, sug'orish va sho'rlanish chegaralarini agronom ko'rib chiqishi", r2:"Qoidalarni sozlash uchun pilot fermalardan tuproq namligi va EC ma'lumotlari", r3:"Aniqroq ma'lumot: SMAP tuproq namligi (~9 km) va har bir dala uchun NDVI", r4:"O'zbek va rus matnlarini ona tilida so'zlashuvchilar tekshirishi", r5:"Har bir fermer tanlagan soatda ogohlantirish (bepul hosting rejasida hozir kuniga bir marta, Toshkent vaqti bilan taxminan 10:00)",
 final_p:"O'rnatish yo'q. Datchik yo'q. Faqat Telegram.",
 foot1:"Sho'r Radar · NASA Space Apps Challenge 2026 · CST jamoasi",
 foot2:"Manbalar: NASA POWER; Open-Meteo; FAO Irrigation &amp; Drainage Paper 56 (Allen va boshq., 1998); Hargreaves &amp; Samani (1985); FAO Paper 29 va Maas &amp; Hoffman (1977); Leaflet; OpenStreetMap contributors; aiogram; FastAPI.",
 foot3:"AI haqida: Claude (Anthropic) rejalashtirish, kod va tarjima qoralamalarida yordam berdi; ilovadagi tushuntiruvchi Gemini asosida. Jamoa barcha natijalarni tekshiradi."
},
ru: {
 nav_how:"Как это работает", nav_features:"Возможности", nav_data:"Данные", nav_honesty:"Честность", nav_next:"Дальше",
 eyebrow:"NASA Space Apps 2026 · команда CST",
 h1:"Поливать ли сегодня?<br><span>Теперь ответит телефон.</span>",
 lead:"Sho'r Radar превращает данные NASA в один понятный ежедневный сигнал для фермеров Узбекистана: поливать, наблюдать или ждать. Также показывает риск засоления и подсказывает солеустойчивые культуры. Работает прямо в Telegram на узбекском, русском и английском.",
 cta_bot:"Открыть Telegram-бота", cta_how:"Как это работает",
 hero_note:"Это поддержка решений, а не измерение. Соль напрямую не наблюдается: мы оцениваем условия, способствующие её накоплению.",
 ph_today:"Сегодня", ph_irrigate:"ПОЛИВАТЬ", ph_why:"Почва в корневой зоне сухая, дождя в ближайшие 3 дня не ожидается.",
 ph_wet:"Влажность почвы", ph_rain:"Дождь, 7 дней", ph_salt:"Риск засоления", ph_med:"Средний", ph_demo:"Пример экрана.",
 prob_h:"Соль и нехватка воды лишают фермеров урожая",
 st1:"орошаемых земель Узбекистана затронуты засолением", st2:"орошаемых земель Каракалпакстана затронуты засолением", st3:"в Сырдарье, одном из наших пилотных районов",
 st_src:"Опубликованная региональная статистика (Frontiers in Sustainable Food Systems, 2025). Она описывает регионы, а не отдельные поля. У большинства мелких фермеров нет датчиков почвы и лёгкого доступа к агроному.",
 how_h:"Как это работает",
 s1h:"Выберите район", s1p:"Выберите охваченный район или отправьте геопозицию. Добавьте поле: культура, стадия роста, грунтовые воды и дренаж.",
 s2h:"Мы читаем данные NASA", s2p:"Влажность корневой зоны, температура, осадки и солнечная радиация из NASA POWER, плюс 7-дневный прогноз Open-Meteo.",
 s3h:"Решают правила", s3p:"Эвапотранспирация и водный баланс сверяются с правилами для культуры. Все пороги видны в одной таблице.",
 s4h:"Вы получаете один ответ", s4p:"Поливать, наблюдать или ждать, с понятной причиной, подсказкой о риске засоления и советами по промывке и культурам.",
 g_irr:"ПОЛИВАТЬ", g_irr_p:"Дефицит воды высок. Поливайте сейчас.", g_mon:"НАБЛЮДАТЬ", g_mon_p:"Близко к границе. Скоро проверьте поле снова.", g_wait:"ЖДАТЬ", g_wait_p:"Почва достаточно влажная или ожидается дождь. Экономьте воду.",
 feat_h:"Что внутри",
 f1h:"💧 Совет по поливу", f1p:"Ежедневный сигнал «поливать / наблюдать / ждать» с причинами. Запись полива обнуляет дефицит воды.",
 f2h:"🧂 Индикатор риска засоления", f2p:"Оценивает условия, способствующие накоплению соли. Если вы введёте измеренное ECe, измерение заменит оценку.",
 f3h:"🚿 Сроки промывки", f3p:"Осторожная подсказка, когда промывка может иметь смысл, по условиям и дате вашей последней промывки.",
 f4h:"🌾 Культуры с учётом соли", f4p:"Карточки солеустойчивости FAO, ваши приоритеты (мало воды, любимые культуры) и идея севооборота из 3 шагов с причинами.",
 f5h:"🗺️ Карта", f5p:"Пилотные районы и ваши поля, окрашенные по сигналу. OpenStreetMap, спутник, истинные цвета NASA и слой растительности MODIS.",
 f6h:"📅 Обзор на 6 месяцев", f6p:"План сезона по примерно двум годам данных NASA. Это климатология, а не прогноз.",
 f7h:"🤖 ИИ-объяснение", f7p:"Небольшая модель Gemini простыми словами объясняет результат правил на вашем языке. Она не меняет решение правил и отвечает только по фактам вашего поля.",
 f8h:"👥 Сообщество фермеров", f8p:"Делитесь советами по району, ставьте лайки, жалуйтесь на плохие посты. Три жалобы скрывают пост. Поддерживается значок проверенного агронома.",
 f9h:"⚠️ Оповещения", f9p:"Предупреждения о заморозках и сильном дожде плюс обычный совет приходят в Telegram.",
 data_h:"Данные и методы",
 d1h:"NASA и открытые данные", d2h:"Методы", d2c:"Все правила в одном версионированном файле с пометкой «временно», пока их не проверит агроном", d2d:"«Как это решено?» показывает, какое именно правило сработало", d3h:"Из чего сделано",
 hon_h:"Честно о своих границах",
 h1h:"Чего мы не утверждаем", h1a:"Соль не измеряется из космоса. Мы оцениваем условия, которые ей благоприятствуют.", h1b:"Сетка NASA POWER около 50 км, поэтому соседние поля выглядят похоже.", h1c:"Пороги общие и пока не проверены агрономом.", h1d:"Точность не заявляется. Это поддержка решений.",
 h2h:"Что мы проверили", h2p:"Мы прогнали правила день за днём на реальных данных NASA для самых сухих и самых влажных 30-дневных окон в трёх районах. В 6 из 6 районо-сезонов в самом сухом окне было не меньше дней ПОЛИВАТЬ и не больше дней ЖДАТЬ. Средняя влажность почвы упорядочена так: ПОЛИВАТЬ ≤ НАБЛЮДАТЬ ≤ ЖДАТЬ.",
 h2s:"Это проверка логики, а не полевая валидация.",
 h3h:"Устойчивость и приватность", h3a:"Данные NASA кэшируются и помечаются «устарело», если NASA недоступен.", h3b:"Демо и устаревшие данные всегда помечены.", h3c:"Запросы проверяются подписанными данными входа Telegram. Вы можете удалить аккаунт и данные.", h3d:"ИИ не получает имён и Telegram ID.",
 rm_h:"Что дальше",
 r1:"Проверка агрономом значений Kc и порогов полива и засоления", r2:"Данные о влажности почвы и EC с пилотных ферм для калибровки правил", r3:"Более точные данные: влажность SMAP (~9 км) и NDVI по каждому полю", r4:"Проверка узбекских и русских текстов носителями языка", r5:"Оповещения в час, выбранный фермером (на бесплатном тарифе сейчас раз в день, около 10:00 по Ташкенту)",
 final_p:"Без установки. Без датчиков. Только Telegram.",
 foot1:"Sho'r Radar · NASA Space Apps Challenge 2026 · команда CST",
 foot2:"Источники: NASA POWER; Open-Meteo; FAO Irrigation &amp; Drainage Paper 56 (Allen и др., 1998); Hargreaves &amp; Samani (1985); FAO Paper 29 и Maas &amp; Hoffman (1977); Leaflet; OpenStreetMap contributors; aiogram; FastAPI.",
 foot3:"Использование ИИ: Claude (Anthropic) помогал с планированием, кодом и черновиками переводов; объяснения в приложении работают на Gemini. Команда проверяет все результаты."
}};

const nodes = [...document.querySelectorAll("[data-i18n]")];
const EN = Object.fromEntries(nodes.map(n => [n.dataset.i18n, n.innerHTML]));
const TITLES = {
  en: "Sho'r Radar – Irrigation and soil-salt advice for Uzbek farmers",
  uz: "Sho'r Radar – O'zbek fermerlari uchun sug'orish va sho'r maslahati",
  ru: "Sho'r Radar – советы по поливу и засолению для фермеров Узбекистана"
};

function setLang(l) {
  nodes.forEach(n => {
    const k = n.dataset.i18n;
    n.innerHTML = (l === "en" ? EN : T[l])[k] ?? EN[k];
  });
  document.documentElement.lang = l;
  document.title = TITLES[l];
  document.querySelectorAll(".lang button").forEach(b => b.classList.toggle("on", b.dataset.lang === l));
  try { localStorage.setItem("lang", l); } catch (e) {}
}

document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
let saved = "en";
try { saved = localStorage.getItem("lang") || ((navigator.language || "").startsWith("ru") ? "ru" : (navigator.language || "").startsWith("uz") ? "uz" : "en"); } catch (e) {}
if (saved !== "en") setLang(saved);
