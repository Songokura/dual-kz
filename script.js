/* ═══════════════════════════════════════════════════════════
   DUAL.KZ — interactions & i18n (RU default | KK | EN)
   ═══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ──────────────── i18n dictionaries ──────────────── */
  var I18N = {
    ru: {
      _title: 'DUAL.KZ — туры и экскурсии по Казахстану, обучение гидов | Астана',
      _desc: 'Туристский информационно-учебный центр DUAL.KZ, Астана. Экскурсии по Астане, туры по Казахстану, приём иностранных туристов, трансферы — и профессиональная подготовка гидов и экскурсоводов. Полный член WFTGA.',
      brand_sub: 'туристский центр',
      nav_dir: 'Направления', nav_exc: 'Экскурсии', nav_tours: 'Туры',
      nav_edu: 'Обучение', nav_about: 'О нас', nav_contacts: 'Контакты',
      nav_foreign: 'Иностранным гостям',
      header_wa: 'WhatsApp', cta_whatsapp: 'Написать в WhatsApp',
      hero_kicker: 'Туроператор · Астана · весь Казахстан',
      hero_title: 'Открываем Казахстан — гостям и тем, кто его показывает',
      hero_sub: 'DUAL.KZ — туристский информационно-учебный центр: авторские экскурсии и туры по всему Казахстану и профессиональная подготовка гидов и экскурсоводов.',
      hero_cta1: 'Подобрать тур', hero_cta2: 'Обучение и тренинги',
      hero_trust1: 'Полный член Всемирной федерации ассоциаций гидов (WFTGA)',
      hero_trust2: 'лет руководителя в туристской отрасли Казахстана',
      hero_trust3: 'Знак качества «Сапа белгісі» от Kazakh Tourism',
      dirs_kicker: 'Два направления', dirs_title: 'Одна команда — две дороги',
      dirs_sub: 'Мы принимаем гостей Казахстана — и готовим профессионалов, которые их встречают. Выберите свою дорогу.',
      dir1_title: 'Путешествия',
      dir1_text: 'Экскурсии по Астане, туры по регионам, сакральные и авторские маршруты, приём иностранных гостей, трансферы и этнокультурные программы.',
      dir1_link: 'Смотреть направление',
      dir2_title: 'Обучение',
      dir2_text: 'Подготовка и повышение квалификации гидов и экскурсоводов, тренинги по первой помощи, курсы трансферных сопровождающих, программы для туроператоров.',
      dir2_link: 'Смотреть направление',
      ast_kicker: 'Туризм · 01', ast_title: 'Экскурсии по Астане',
      ast_lead: 'Столица, которую мы знаем наизусть: от Байтерека и набережной Есиля до музеев и новых архитектурных символов. Пешеходные и автомобильные форматы — индивидуально и для групп, на русском, казахском и английском.',
      ast_li1: 'Обзорные экскурсии по левому и правому берегу',
      ast_li2: 'Тематические маршруты под интересы гостей',
      ast_li3: 'Вечерняя Астана и панорамные точки города',
      ast_note: 'Программу и время подберём под вас — напишите нам.',
      ast_cta: 'Заказать экскурсию',
      tours_kicker: 'Туризм · 02', tours_title: 'Туры по Казахстану',
      tours_sub: 'От сосен Бурабая до каньонов Чарына — собираем маршруты по всем регионам страны: туры выходного дня, природные экспедиции, сакральные и авторские программы.',
      tour1_title: 'Бурабай и север',
      tour1_text: 'Озёра, сосновые боры и скалы «казахстанской Швейцарии» — природа в паре часов от столицы.',
      tour2_title: 'Чарын и юг',
      tour2_text: 'Каньоны, горы и степные дороги Семиречья — самые кинематографичные пейзажи страны.',
      tour3_title: 'Сакральные маршруты',
      tour3_text: 'Түркістан, древние мавзолеи и святые места Великой степи — путешествия к истокам.',
      tour4_title: 'Авторские маршруты',
      tour4_text: 'Маршруты, которых нет в каталогах: разрабатываем программу под ваши интересы, сроки и ритм.',
      tours_note: 'Расскажите, что вам интересно, — пришлём варианты программ, даты и цены в WhatsApp.',
      tours_cta: 'Подобрать тур',
      for_kicker: 'Туризм · 03 · Welcome to Kazakhstan',
      for_title: 'Приём иностранных гостей',
      for_lead: 'Принимаем путешественников со всего мира: продуманная логистика, англоязычные гиды и программы, которые раскрывают современный Казахстан и Великую степь.',
      for_wftga: 'DUAL.KZ — полный член Всемирной федерации ассоциаций гидов (WFTGA). Международный стандарт работы гидов — это уровень, на котором мы принимаем гостей.',
      for_li1: 'Англоязычные гиды и программы на английском',
      for_li2: 'Встреча в аэропорту и сопровождение на всём маршруте',
      for_li3: 'Индивидуальные и групповые форматы',
      for_cta: 'Написать в WhatsApp',
      tr_kicker: 'Туризм · 04', tr_title: 'Трансфер и сопровождение',
      tr_lead: 'Гость под заботой с первой минуты: табличка с именем на выходе, помощь с багажом, комфортная подача машины и сопровождающий, который отвечает за группу в пути.',
      tr_li1: 'Встречи и проводы в аэропорту Астаны',
      tr_li2: 'Трансферы по городу и в другие регионы',
      tr_li3: 'Трансферные сопровождающие для туристских групп',
      tr_price1_v: 'от 4 000 ₸', tr_price1_l: 'за час поездки',
      tr_price2_v: 'от 15 000 ₸', tr_price2_l: 'аэропорт — центр, в одну сторону',
      tr_price3_v: 'до 6', tr_price3_l: 'человек в группе',
      tr_partner: 'Совместно с этноцентром TAMYR. Путешествуй с комфортом!',
      tr_cta: 'Обсудить трансфер',
      et_kicker: 'Туризм · 05', et_title: 'Этнокультурные программы',
      et_lead: 'Традиции Великой степи — вживую: юрта и шаңырақ, домбра, национальная кухня от баурсаков до бешбармака, ремёсла и обычаи гостеприимства.',
      et_chip1: 'Традиции и обряды', et_chip2: 'Национальная кухня', et_chip3: 'Ремёсла и мастер-классы',
      et_partner: 'Партнёр наших программ — этноцентр TAMYR с настоящей юртой.',
      et_cta: 'Обсудить программу',
      edu_kicker: 'Направление 02 · Обучение',
      edu_title: 'Обучение и тренинги для специалистов туризма',
      edu_sub: 'Учебное крыло DUAL.KZ: готовим и повышаем квалификацию тех, кто работает с туристами. Практика — от команды, которая сама ежедневно принимает гостей.',
      edu_quote: '«Наша миссия — подготовить специалистов, которые поднимут туризм на новый уровень.»',
      edu_stat1_b: 'с 2015', edu_stat1: 'года стабильно работаем в краткосрочном образовании',
      edu_stat2: 'выпущенных квалифицированных специалистов',
      edu_stat3_b: 'Практика', edu_stat3: 'деловые игры, практикумы и тренинги с действующими дипломированными преподавателями',
      edu1_title: 'Курс «Гид» · «Экскурсовод»',
      edu1_text: 'Подготовка и повышение квалификации: методика экскурсии, построение маршрута, работа с группой.',
      edu2_title: 'Курс «Туристский агент»',
      edu2_text: 'Профессия с нуля: продукты, бронирование, работа с клиентом и правовые основы туризма.',
      edu3_title: 'Курс «Инструктор по туризму»',
      edu3_text: 'Активные маршруты и работа с группами на природе — от планирования до техники безопасности.',
      edu4_title: 'Первая доврачебная помощь',
      edu4_text: 'Тренинг для гидов и сопровождающих: уверенные алгоритмы действий до прибытия медиков.',
      edu5_title: 'Трансферные сопровождающие',
      edu5_text: 'Подготовка специалистов по встрече, проводам и сопровождению туристских групп.',
      edu6_title: 'Тренинги для туроператоров',
      edu6_text: 'Корпоративные программы для команд туркомпаний: сервис, приём гостей, стандарты отрасли.',
      edu_ind_title: 'Индивидуальные программы',
      edu_ind_text: 'Соберём программу обучения под задачи вашей команды или ваш личный план развития — по запросу.',
      edu_meta: 'Программа, часы и даты — по запросу',
      edu_cta: 'Записаться на тренинг',
      why_kicker: 'Доверие', why_title: 'Почему выбирают DUAL.KZ',
      why1_title: 'Полный член WFTGA',
      why1_text: 'Всемирная федерация ассоциаций гидов — международный стандарт профессии. Членство в WFTGA — знак качества, понятный гостям из любой страны.',
      why2_title: 'лет в туристской отрасли',
      why2_text: 'Опыт руководителя компании в туризме Казахстана — от экскурсионного дела до подготовки специалистов.',
      why_sapa_title: 'Знак качества «Сапа белгісі»',
      why_sapa_text: 'Государственный знак отличия программы «Сапа белгісі» АО «НК Kazakh Tourism» при поддержке Министерства туризма и спорта РК — в категории «Оқу орны» (учебное заведение).',
      why_grad_title: 'выпускников',
      why_grad_text: 'Более 500 квалифицированных специалистов, подготовленных центром, работают в туризме Казахстана.',
      why3_title: 'Отраслевые партнёрства',
      why3_text: 'Работаем в профессиональном сообществе гидов Казахстана — вместе с KazGuides и этноцентром TAMYR.',
      why4_title: 'Три языка',
      why4_text: 'Экскурсии и сопровождение на русском, казахском и английском языках.',
      why5_title: 'Безопасность гостей',
      why5_text: 'Первая доврачебная помощь — часть нашего стандарта работы и тема наших собственных тренингов.',
      rev_title: 'Отзывы туристов и выпускников',
      rev_text: 'Мы собираем живые впечатления наших гостей и выпускников — скоро они появятся здесь. А пока загляните в наш Instagram: там путешествия происходят в реальном времени.',
      ab_kicker: 'О компании', ab_title: 'Кто мы',
      ab_text1: 'ТОО Туроператор «DUAL.KZ» — туристский информационно-учебный центр в Астане. Мы развиваем внутренний и въездной туризм Казахстана и готовим профессионалов отрасли.',
      ab_text2: 'Поэтому мы — DUAL: два направления одного дела. Показывать страну гостям — и учить показывать её профессионально. Руководитель компании посвятил туристской отрасли Казахстана более 35 лет.',
      ab_text3: 'В краткосрочном образовании мы стабильно работаем с 2015 года — за это время центр выпустил более 500 квалифицированных специалистов туризма.',
      ct_kicker: 'Контакты', ct_title: 'Свяжитесь с нами',
      ct_sub: 'Отвечаем в WhatsApp ежедневно. Выберите тему — мы направим вас к нужному специалисту.',
      ct_addr_l: 'Адрес', ct_addr_v: 'г. Астана, ул. Женис 24/1',
      ct_hours_l: 'График', ct_hours_v: 'Ежедневно 09:00–21:00, круглый год',
      ct_ph1_l: 'Экскурсии по Астане', ct_ph2_l: 'Туры по Казахстану', ct_ph3_l: 'Тренинги и общие вопросы',
      cf_name: 'Ваше имя', cf_name_ph: 'Как к вам обращаться?',
      cf_topic: 'Тема',
      cf_t1: 'Экскурсия по Астане', cf_t2: 'Тур по Казахстану', cf_t3: 'Обучение / тренинг', cf_t4: 'Другой вопрос',
      cf_msg: 'Сообщение', cf_msg_ph: 'Что вам интересно? Когда планируете?',
      cf_submit: 'Открыть чат в WhatsApp',
      cf_thanks: 'Спасибо! Открываем WhatsApp — если чат не открылся, напишите нам: +7 707 828 1548.',
      ft_tag: 'Туристский информационно-учебный центр. Астана · весь Казахстан.',
      ft_col1: 'Туризм', ft_col2: 'Обучение',
      ft_transfer: 'Трансфер', ft_etno: 'Этнопрограммы',
      ft_guides: 'Гиды и экскурсоводы', ft_aid: 'Первая помощь',
      ft_escort: 'Сопровождающие', ft_to: 'Для туроператоров',
      ft_copy: '© ТОО Туроператор «DUAL.KZ», Астана',
      ft_photo: 'Фото: Unsplash',
      wa_msg_excursion: 'Здравствуйте! Хочу заказать экскурсию по Астане.',
      wa_msg_tour: 'Здравствуйте! Помогите подобрать тур по Казахстану.',
      wa_msg_training: 'Здравствуйте! Хочу записаться на тренинг.',
      wa_msg_general: 'Здравствуйте! Пишу с сайта DUAL.KZ.'
    },

    kk: {
      _title: 'DUAL.KZ — Қазақстан бойынша турлар мен экскурсиялар, гидтерді оқыту | Астана',
      _desc: 'DUAL.KZ туристік ақпараттық-оқу орталығы, Астана. Астана бойынша экскурсиялар, Қазақстан бойынша турлар, шетелдік туристерді қабылдау, трансферлер және гид-экскурсоводтарды кәсіби даярлау. WFTGA толық мүшесі.',
      brand_sub: 'туристік орталық',
      nav_dir: 'Бағыттар', nav_exc: 'Экскурсиялар', nav_tours: 'Турлар',
      nav_edu: 'Оқыту', nav_about: 'Біз туралы', nav_contacts: 'Байланыс',
      nav_foreign: 'Шетелдік қонақтарға',
      header_wa: 'WhatsApp', cta_whatsapp: 'WhatsApp-қа жазу',
      hero_kicker: 'Туроператор · Астана · бүкіл Қазақстан',
      hero_title: 'Қазақстанды ашамыз — қонақтарға және оны таныстыратындарға',
      hero_sub: 'DUAL.KZ — туристік ақпараттық-оқу орталығы: бүкіл Қазақстан бойынша авторлық экскурсиялар мен турлар және гидтер мен экскурсоводтарды кәсіби даярлау.',
      hero_cta1: 'Тур таңдау', hero_cta2: 'Оқыту және тренингтер',
      hero_trust1: 'Дүниежүзілік гидтер қауымдастықтары федерациясының (WFTGA) толық мүшесі',
      hero_trust2: 'жыл — басшының Қазақстан туризміндегі тәжірибесі',
      hero_trust3: '«Сапа белгісі» — Kazakh Tourism сапа белгісі',
      dirs_kicker: 'Екі бағыт', dirs_title: 'Бір команда — екі жол',
      dirs_sub: 'Біз Қазақстан қонақтарын қабылдаймыз және оларды қарсы алатын мамандарды даярлаймыз. Өз жолыңызды таңдаңыз.',
      dir1_title: 'Саяхат',
      dir1_text: 'Астана бойынша экскурсиялар, өңірлерге турлар, киелі және авторлық маршруттар, шетелдік қонақтарды қабылдау, трансферлер мен этномәдени бағдарламалар.',
      dir1_link: 'Бағытты қарау',
      dir2_title: 'Оқыту',
      dir2_text: 'Гидтер мен экскурсоводтарды даярлау және біліктілігін арттыру, алғашқы көмек тренингтері, трансферлік ілесушілер курстары, туроператорларға арналған бағдарламалар.',
      dir2_link: 'Бағытты қарау',
      ast_kicker: 'Туризм · 01', ast_title: 'Астана бойынша экскурсиялар',
      ast_lead: 'Біз жатқа білетін елорда: Бәйтеректен Есіл жағалауына, мұражайлардан жаңа сәулет символдарына дейін. Жаяу және көлікпен жүретін форматтар — жеке және топпен, қазақ, орыс және ағылшын тілдерінде.',
      ast_li1: 'Сол және оң жағалау бойынша шолу экскурсиялары',
      ast_li2: 'Қонақтардың қызығушылығына қарай тақырыптық маршруттар',
      ast_li3: 'Кешкі Астана және қаланың панорамалық нүктелері',
      ast_note: 'Бағдарлама мен уақытты сізге бейімдеп таңдаймыз — бізге жазыңыз.',
      ast_cta: 'Экскурсияға тапсырыс беру',
      tours_kicker: 'Туризм · 02', tours_title: 'Қазақстан бойынша турлар',
      tours_sub: 'Бурабай қарағайларынан Шарын шатқалдарына дейін — еліміздің барлық өңірлері бойынша маршруттар құрастырамыз: демалыс күндері турлары, табиғи экспедициялар, киелі және авторлық бағдарламалар.',
      tour1_title: 'Бурабай және солтүстік',
      tour1_text: 'Көлдер, қарағайлы ормандар мен «қазақстандық Швейцарияның» жартастары — елордадан екі-үш сағаттық жердегі табиғат.',
      tour2_title: 'Шарын және оңтүстік',
      tour2_text: 'Жетісудың шатқалдары, таулары мен дала жолдары — еліміздің ең кинематографиялық пейзаждары.',
      tour3_title: 'Киелі маршруттар',
      tour3_text: 'Түркістан, көне кесенелер мен Ұлы даланың қасиетті орындары — бастауларға саяхат.',
      tour4_title: 'Авторлық маршруттар',
      tour4_text: 'Каталогтарда жоқ маршруттар: бағдарламаны сіздің қызығушылығыңызға, мерзіміңізге және ырғағыңызға қарай әзірлейміз.',
      tours_note: 'Нені қалайтыныңызды айтыңыз — бағдарлама нұсқаларын, күндер мен бағаларды WhatsApp-қа жібереміз.',
      tours_cta: 'Тур таңдау',
      for_kicker: 'Туризм · 03 · Welcome to Kazakhstan',
      for_title: 'Шетелдік қонақтарды қабылдау',
      for_lead: 'Әлемнің түкпір-түкпірінен саяхатшыларды қабылдаймыз: ойластырылған логистика, ағылшын тілді гидтер және заманауи Қазақстан мен Ұлы даланы ашатын бағдарламалар.',
      for_wftga: 'DUAL.KZ — Дүниежүзілік гидтер қауымдастықтары федерациясының (WFTGA) толық мүшесі. Гидтер жұмысының халықаралық стандарты — біз қонақтарды қабылдайтын деңгей.',
      for_li1: 'Ағылшын тілді гидтер және ағылшын тіліндегі бағдарламалар',
      for_li2: 'Әуежайда қарсы алу және бүкіл маршрут бойы ілесіп жүру',
      for_li3: 'Жеке және топтық форматтар',
      for_cta: 'WhatsApp-қа жазу',
      tr_kicker: 'Туризм · 04', tr_title: 'Трансфер және ілесіп жүру',
      tr_lead: 'Қонақ алғашқы минуттан қамқорлықта: шығу есігінде есімі жазылған тақтайша, жүкке көмек, ыңғайлы көлік және жолда топқа жауап беретін ілесуші.',
      tr_li1: 'Астана әуежайында қарсы алу және шығарып салу',
      tr_li2: 'Қала ішіндегі және өңіраралық трансферлер',
      tr_li3: 'Туристік топтарға арналған трансферлік ілесушілер',
      tr_price1_v: '4 000 ₸-ден', tr_price1_l: 'сапар сағатына',
      tr_price2_v: '15 000 ₸-ден', tr_price2_l: 'әуежай — орталық, бір бағытта',
      tr_price3_v: '6-ға дейін', tr_price3_l: 'топтағы адам саны',
      tr_partner: 'TAMYR этноорталығымен бірлесіп. Жайлы саяхаттаңыз!',
      tr_cta: 'Трансферді талқылау',
      et_kicker: 'Туризм · 05', et_title: 'Этномәдени бағдарламалар',
      et_lead: 'Ұлы даланың дәстүрлері — көз алдыңызда: киіз үй мен шаңырақ, домбыра, бауырсақтан бесбармаққа дейінгі ұлттық ас, қолөнер мен қонақжайлылық салттары.',
      et_chip1: 'Дәстүрлер мен салттар', et_chip2: 'Ұлттық ас', et_chip3: 'Қолөнер және шеберлік сыныптары',
      et_partner: 'Бағдарламаларымыздың серіктесі — нағыз киіз үйі бар TAMYR этноорталығы.',
      et_cta: 'Бағдарламаны талқылау',
      edu_kicker: '02-бағыт · Оқыту',
      edu_title: 'Туризм мамандарын оқыту және тренингтер',
      edu_sub: 'DUAL.KZ оқу қанаты: туристермен жұмыс істейтіндерді даярлаймыз және біліктілігін арттырамыз. Тәжірибе — күн сайын қонақтарды өзі қабылдайтын командадан.',
      edu_quote: '«Біздің миссиямыз — туризмді жаңа деңгейге көтеретін мамандарды даярлау.»',
      edu_stat1_b: '2015 жылдан', edu_stat1: 'бері қысқа мерзімді білім беруде тұрақты жұмыс істейміз',
      edu_stat2: 'даярланып шыққан білікті маман',
      edu_stat3_b: 'Тәжірибе', edu_stat3: 'іскерлік ойындар, практикумдар және тренингтер — тәжірибелі дипломды оқытушылармен',
      edu1_title: '«Гид» · «Экскурсовод» курсы',
      edu1_text: 'Даярлау және біліктілікті арттыру: экскурсия әдістемесі, маршрут құру, топпен жұмыс.',
      edu2_title: '«Туристік агент» курсы',
      edu2_text: 'Кәсіпті нөлден меңгеру: туристік өнімдер, брондау, клиентпен жұмыс және туризмнің құқықтық негіздері.',
      edu3_title: '«Туризм нұсқаушысы» курсы',
      edu3_text: 'Белсенді маршруттар және табиғатта топпен жұмыс — жоспарлаудан қауіпсіздік техникасына дейін.',
      edu4_title: 'Дәрігерге дейінгі алғашқы көмек',
      edu4_text: 'Гидтер мен ілесушілерге арналған тренинг: медиктер келгенге дейінгі сенімді әрекет алгоритмдері.',
      edu5_title: 'Трансферлік ілесушілер',
      edu5_text: 'Туристік топтарды қарсы алу, шығарып салу және ілесіп жүру мамандарын даярлау.',
      edu6_title: 'Туроператорларға тренингтер',
      edu6_text: 'Туристік компания командаларына арналған корпоративтік бағдарламалар: сервис, қонақ қабылдау, сала стандарттары.',
      edu_ind_title: 'Жеке бағдарламалар',
      edu_ind_text: 'Оқу бағдарламасын командаңыздың міндеттеріне немесе жеке даму жоспарыңызға бейімдеп құрастырамыз — сұраныс бойынша.',
      edu_meta: 'Бағдарлама, сағаттар мен күндер — сұраныс бойынша',
      edu_cta: 'Тренингке жазылу',
      why_kicker: 'Сенім', why_title: 'Бізді неге таңдайды',
      why1_title: 'WFTGA толық мүшесі',
      why1_text: 'Дүниежүзілік гидтер қауымдастықтары федерациясы — кәсіптің халықаралық стандарты. WFTGA мүшелігі — кез келген елдің қонағына түсінікті сапа белгісі.',
      why2_title: 'жыл туризм саласында',
      why2_text: 'Компания басшысының Қазақстан туризміндегі тәжірибесі — экскурсия ісінен мамандарды даярлауға дейін.',
      why_sapa_title: '«Сапа белгісі» ерекшелік белгісі',
      why_sapa_text: '«Kazakh Tourism» ұлттық компаниясының «Сапа белгісі» бағдарламасының мемлекеттік ерекшелік белгісі, ҚР Туризм және спорт министрлігінің қолдауымен — «Оқу орны» санатында.',
      why_grad_title: 'түлек',
      why_grad_text: 'Орталық даярлаған 500-ден астам білікті маман Қазақстан туризмінде жұмыс істеп жүр.',
      why3_title: 'Салалық серіктестіктер',
      why3_text: 'Қазақстан гидтерінің кәсіби қоғамдастығында жұмыс істейміз — KazGuides және TAMYR этноорталығымен бірге.',
      why4_title: 'Үш тіл',
      why4_text: 'Қазақ, орыс және ағылшын тілдеріндегі экскурсиялар мен ілесіп жүру.',
      why5_title: 'Қонақтардың қауіпсіздігі',
      why5_text: 'Дәрігерге дейінгі алғашқы көмек — жұмыс стандартымыздың бөлігі және өз тренингтеріміздің тақырыбы.',
      rev_title: 'Туристер мен түлектердің пікірлері',
      rev_text: 'Қонақтарымыз бен түлектеріміздің шынайы әсерлерін жинап жатырмыз — жақында олар осында пайда болады. Әзірге Instagram парақшамызға көз жүгіртіңіз: онда саяхаттар нақты уақытта өтіп жатыр.',
      ab_kicker: 'Компания туралы', ab_title: 'Біз кімбіз',
      ab_text1: '«DUAL.KZ» Туроператор ЖШС — Астанадағы туристік ақпараттық-оқу орталығы. Біз Қазақстанның ішкі және келу туризмін дамытамыз және сала мамандарын даярлаймыз.',
      ab_text2: 'Сондықтан біз — DUAL: бір істің екі бағыты. Елді қонақтарға көрсету — және оны кәсіби түрде көрсетуге үйрету. Компания басшысы Қазақстанның туризм саласына 35 жылдан астам уақытын арнады.',
      ab_text3: 'Қысқа мерзімді білім беруде 2015 жылдан бері тұрақты жұмыс істейміз — осы уақыт ішінде орталық 500-ден астам білікті туризм маманын даярлап шығарды.',
      ct_kicker: 'Байланыс', ct_title: 'Бізбен хабарласыңыз',
      ct_sub: 'WhatsApp-та күн сайын жауап береміз. Тақырыпты таңдаңыз — сізді қажетті маманға бағыттаймыз.',
      ct_addr_l: 'Мекенжай', ct_addr_v: 'Астана қ., Жеңіс к-сі 24/1',
      ct_hours_l: 'Жұмыс уақыты', ct_hours_v: 'Күн сайын 09:00–21:00, жыл бойы',
      ct_ph1_l: 'Астана бойынша экскурсиялар', ct_ph2_l: 'Қазақстан бойынша турлар', ct_ph3_l: 'Тренингтер және жалпы сұрақтар',
      cf_name: 'Есіміңіз', cf_name_ph: 'Сізді қалай атайық?',
      cf_topic: 'Тақырып',
      cf_t1: 'Астана бойынша экскурсия', cf_t2: 'Қазақстан бойынша тур', cf_t3: 'Оқыту / тренинг', cf_t4: 'Басқа сұрақ',
      cf_msg: 'Хабарлама', cf_msg_ph: 'Сізді не қызықтырады? Қашан жоспарлап отырсыз?',
      cf_submit: 'WhatsApp чатын ашу',
      cf_thanks: 'Рақмет! WhatsApp ашылып жатыр — чат ашылмаса, бізге жазыңыз: +7 707 828 1548.',
      ft_tag: 'Туристік ақпараттық-оқу орталығы. Астана · бүкіл Қазақстан.',
      ft_col1: 'Туризм', ft_col2: 'Оқыту',
      ft_transfer: 'Трансфер', ft_etno: 'Этнобағдарламалар',
      ft_guides: 'Гидтер мен экскурсоводтар', ft_aid: 'Алғашқы көмек',
      ft_escort: 'Ілесушілер', ft_to: 'Туроператорларға',
      ft_copy: '© «DUAL.KZ» Туроператор ЖШС, Астана',
      ft_photo: 'Фото: Unsplash',
      wa_msg_excursion: 'Сәлеметсіз бе! Астана бойынша экскурсияға тапсырыс бергім келеді.',
      wa_msg_tour: 'Сәлеметсіз бе! Қазақстан бойынша тур таңдауға көмектесіңізші.',
      wa_msg_training: 'Сәлеметсіз бе! Тренингке жазылғым келеді.',
      wa_msg_general: 'Сәлеметсіз бе! DUAL.KZ сайтынан жазып отырмын.'
    },

    en: {
      _title: 'DUAL.KZ — Kazakhstan Tours, Astana City Tours & Guide Training',
      _desc: 'DUAL.KZ Tourist Information & Training Centre, Astana. Astana city tours, journeys across Kazakhstan, inbound services for international travellers, transfers — and professional training for tourist guides. Full member of WFTGA.',
      brand_sub: 'tourist centre',
      nav_dir: 'What we do', nav_exc: 'City tours', nav_tours: 'Tours',
      nav_edu: 'Training', nav_about: 'About', nav_contacts: 'Contacts',
      nav_foreign: 'For international guests',
      header_wa: 'WhatsApp', cta_whatsapp: 'Chat on WhatsApp',
      hero_kicker: 'Tour operator · Astana · all of Kazakhstan',
      hero_title: 'Opening Kazakhstan — to its guests, and to those who show it',
      hero_sub: 'DUAL.KZ is a tourist information and training centre: signature tours and excursions across Kazakhstan, plus professional training for tourist guides.',
      hero_cta1: 'Find my tour', hero_cta2: 'Training courses',
      hero_trust1: 'Full member of the World Federation of Tourist Guide Associations (WFTGA)',
      hero_trust2: 'years of our director’s experience in Kazakhstan’s tourism industry',
      hero_trust3: '“Sapa Belgisi” quality mark by Kazakh Tourism',
      dirs_kicker: 'Two directions', dirs_title: 'One team — two roads',
      dirs_sub: 'We welcome Kazakhstan’s guests — and train the professionals who host them. Choose your road.',
      dir1_title: 'Travel',
      dir1_text: 'Astana city tours, journeys across the regions, sacred and signature routes, inbound services for international guests, transfers and ethno-cultural programmes.',
      dir1_link: 'Explore travel',
      dir2_title: 'Training',
      dir2_text: 'Training and professional development for guides, first-aid workshops, transfer escort courses and programmes for tour operators.',
      dir2_link: 'Explore training',
      ast_kicker: 'Travel · 01', ast_title: 'Astana city tours',
      ast_lead: 'A capital we know by heart: from Baiterek Tower and the Yesil riverfront to museums and bold new architecture. Walking and driving formats — private or group, in English, Kazakh and Russian.',
      ast_li1: 'Highlight tours of the Left and Right Bank',
      ast_li2: 'Themed routes shaped around your interests',
      ast_li3: 'Astana by night and the city’s best viewpoints',
      ast_note: 'We will tailor the programme and timing to you — just message us.',
      ast_cta: 'Book a city tour',
      tours_kicker: 'Travel · 02', tours_title: 'Tours across Kazakhstan',
      tours_sub: 'From the pines of Burabay to the canyons of Charyn — we build routes across every region: weekend getaways, nature expeditions, sacred journeys and signature programmes.',
      tour1_title: 'Burabay & the north',
      tour1_text: 'Lakes, pine forests and granite cliffs of “Kazakh Switzerland” — nature a couple of hours from the capital.',
      tour2_title: 'Charyn & the south',
      tour2_text: 'Canyons, mountains and steppe roads of Zhetysu — the country’s most cinematic landscapes.',
      tour3_title: 'Sacred routes',
      tour3_text: 'Turkistan, ancient mausoleums and the holy places of the Great Steppe — journeys to the source.',
      tour4_title: 'Signature routes',
      tour4_text: 'Routes you won’t find in catalogues: we design the programme around your interests, dates and pace.',
      tours_note: 'Tell us what excites you — we’ll send programme options, dates and prices on WhatsApp.',
      tours_cta: 'Find my tour',
      for_kicker: 'Travel · 03 · Welcome to Kazakhstan',
      for_title: 'Welcoming international guests',
      for_lead: 'We host travellers from all over the world: well-planned logistics, English-speaking guides and programmes that reveal both modern Kazakhstan and the Great Steppe.',
      for_wftga: 'DUAL.KZ is a full member of the World Federation of Tourist Guide Associations (WFTGA). The international standard of tourist guiding is the level at which we welcome our guests.',
      for_li1: 'English-speaking guides and programmes in English',
      for_li2: 'Airport meet & greet and support throughout your journey',
      for_li3: 'Private and group formats',
      for_cta: 'Chat on WhatsApp',
      tr_kicker: 'Travel · 04', tr_title: 'Transfers & escort services',
      tr_lead: 'Cared for from the very first minute: a name board at arrivals, help with luggage, a comfortable vehicle and an escort who is responsible for the group along the way.',
      tr_li1: 'Meet & greet and send-off at Astana airport',
      tr_li2: 'City and intercity transfers',
      tr_li3: 'Transfer escorts for tourist groups',
      tr_price1_v: 'from ₸4,000', tr_price1_l: 'per hour of travel',
      tr_price2_v: 'from ₸15,000', tr_price2_l: 'airport — city centre, one way',
      tr_price3_v: 'up to 6', tr_price3_l: 'people per group',
      tr_partner: 'Together with the TAMYR ethno-centre. Travel in comfort!',
      tr_cta: 'Discuss a transfer',
      et_kicker: 'Travel · 05', et_title: 'Ethno-cultural programmes',
      et_lead: 'The traditions of the Great Steppe, brought to life: the yurt and its shanyrak, the dombra, national cuisine from baursaks to beshbarmak, crafts and the customs of hospitality.',
      et_chip1: 'Traditions & rituals', et_chip2: 'National cuisine', et_chip3: 'Crafts & masterclasses',
      et_partner: 'Our programme partner is the TAMYR ethno-centre with its authentic yurt.',
      et_cta: 'Discuss a programme',
      edu_kicker: 'Direction 02 · Training',
      edu_title: 'Training for tourism professionals',
      edu_sub: 'The training wing of DUAL.KZ: we prepare and upskill the people who work with travellers. The practice comes from a team that welcomes guests every day.',
      edu_quote: '“Our mission is to train the specialists who will take tourism to a whole new level.”',
      edu_stat1_b: 'since 2015', edu_stat1: 'delivering short-term professional education',
      edu_stat2: 'qualified specialists trained and graduated',
      edu_stat3_b: 'Hands-on', edu_stat3: 'business games, practicums and workshops led by practising, certified instructors',
      edu1_title: '“Guide” · “Tour Leader” course',
      edu1_text: 'Training and professional development: guiding methodology, route design, working with groups.',
      edu2_title: '“Travel Agent” course',
      edu2_text: 'The profession from scratch: travel products, booking, client work and the legal basics of tourism.',
      edu3_title: '“Tourism Instructor” course',
      edu3_text: 'Active routes and outdoor group leadership — from planning to safety procedures.',
      edu4_title: 'First aid',
      edu4_text: 'A workshop for guides and escorts: confident response protocols until medics arrive.',
      edu5_title: 'Transfer escorts',
      edu5_text: 'Training specialists in meeting, seeing off and accompanying tourist groups.',
      edu6_title: 'For tour operators',
      edu6_text: 'Corporate programmes for travel company teams: service, guest experience, industry standards.',
      edu_ind_title: 'Individual programmes',
      edu_ind_text: 'We will build a training programme around your team’s needs or your personal development plan — on request.',
      edu_meta: 'Programme, hours and dates — on request',
      edu_cta: 'Enrol in a course',
      why_kicker: 'Trust', why_title: 'Why DUAL.KZ',
      why1_title: 'Full member of WFTGA',
      why1_text: 'The World Federation of Tourist Guide Associations sets the international standard of the profession. WFTGA membership is a mark of quality guests from any country recognise.',
      why2_title: 'years in the tourism industry',
      why2_text: 'Our director’s experience in Kazakhstan’s tourism — from guiding to training the industry’s professionals.',
      why_sapa_title: '“Sapa Belgisi” quality mark',
      why_sapa_text: 'The state mark of distinction of the “Sapa Belgisi” programme by Kazakh Tourism National Company, supported by the Ministry of Tourism and Sports of Kazakhstan — in the “Educational Institution” category.',
      why_grad_title: 'graduates',
      why_grad_text: 'More than 500 qualified specialists trained by the centre now work in Kazakhstan’s tourism.',
      why3_title: 'Industry partnerships',
      why3_text: 'We work within Kazakhstan’s professional guiding community — together with KazGuides and the TAMYR ethno-centre.',
      why4_title: 'Three languages',
      why4_text: 'Tours and support in English, Kazakh and Russian.',
      why5_title: 'Guest safety',
      why5_text: 'First aid is part of our working standard — and a subject we teach in our own courses.',
      rev_title: 'Reviews from travellers and graduates',
      rev_text: 'We are gathering real impressions from our guests and graduates — they will appear here soon. Meanwhile, visit our Instagram: that’s where the journeys happen in real time.',
      ab_kicker: 'About us', ab_title: 'Who we are',
      ab_text1: 'Tour operator DUAL.KZ LLP is a tourist information and training centre in Astana. We develop domestic and inbound tourism in Kazakhstan and train the industry’s professionals.',
      ab_text2: 'That is why we are DUAL: two directions of one craft — showing the country to its guests, and teaching others to show it professionally. Our director has devoted more than 35 years to Kazakhstan’s tourism industry.',
      ab_text3: 'We have been delivering short-term professional education since 2015 — in that time the centre has trained more than 500 qualified tourism specialists.',
      ct_kicker: 'Contacts', ct_title: 'Get in touch',
      ct_sub: 'We reply on WhatsApp every day. Pick a topic — we’ll route you to the right specialist.',
      ct_addr_l: 'Address', ct_addr_v: '24/1 Zhenis Ave, Astana',
      ct_hours_l: 'Hours', ct_hours_v: 'Daily 09:00–21:00, all year round',
      ct_ph1_l: 'Astana city tours', ct_ph2_l: 'Tours across Kazakhstan', ct_ph3_l: 'Training & general enquiries',
      cf_name: 'Your name', cf_name_ph: 'What should we call you?',
      cf_topic: 'Topic',
      cf_t1: 'Astana city tour', cf_t2: 'Tour across Kazakhstan', cf_t3: 'Training course', cf_t4: 'Something else',
      cf_msg: 'Message', cf_msg_ph: 'What are you interested in? When are you planning to travel?',
      cf_submit: 'Open WhatsApp chat',
      cf_thanks: 'Thank you! Opening WhatsApp — if the chat didn’t open, message us at +7 707 828 1548.',
      ft_tag: 'Tourist information & training centre. Astana · all of Kazakhstan.',
      ft_col1: 'Travel', ft_col2: 'Training',
      ft_transfer: 'Transfers', ft_etno: 'Ethno programmes',
      ft_guides: 'Guides & tour leaders', ft_aid: 'First aid',
      ft_escort: 'Transfer escorts', ft_to: 'For tour operators',
      ft_copy: '© Tour operator DUAL.KZ LLP, Astana',
      ft_photo: 'Photos: Unsplash',
      wa_msg_excursion: 'Hello! I would like to book a city tour of Astana.',
      wa_msg_tour: 'Hello! Please help me find a tour across Kazakhstan.',
      wa_msg_training: 'Hello! I would like to enrol in a training course.',
      wa_msg_general: 'Hello! I am writing from the DUAL.KZ website.'
    }
  };

  var LANG_KEY = 'dualkz-lang';
  var currentLang = 'ru';

  function applyLang(lang) {
    if (!I18N[lang]) lang = 'ru';
    currentLang = lang;
    var dict = I18N[lang];
    document.documentElement.lang = lang;
    document.title = dict._title;
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', dict._desc);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-ph');
      if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });
    document.querySelectorAll('.lang button').forEach(function (b) {
      var on = b.getAttribute('data-lang') === lang;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    splitHeroTitle();
  }

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); });
  });

  /* ─────────────── hero kinetic headline ───────────── */
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function splitHeroTitle() {
    var t = document.getElementById('heroTitle');
    if (!t || reduceMotion) return;
    var words = t.textContent.trim().split(/\s+/);
    t.innerHTML = words.map(function (w, i) {
      return '<span class="w"><span style="animation-delay:' + (0.06 * i + 0.15) + 's">' + w + '</span></span>';
    }).join(' ');
  }

  /* ─────────────── header state ────────────────────── */
  var header = document.getElementById('header');
  var hero = document.getElementById('hero');

  function onScrollHeader() {
    var y = window.scrollY || 0;
    header.classList.toggle('is-scrolled', y > 24);
    document.body.classList.toggle('hero-on', y < (hero ? hero.offsetHeight - 90 : 500) && !document.body.classList.contains('menu-open'));
  }

  /* ─────────────── golden thread progress ──────────── */
  var threadBar = document.getElementById('threadBar');
  function onScrollThread() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    threadBar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
  }

  /* ─────────────── hero parallax ───────────────────── */
  var heroImg = document.querySelector('.hero__bg img');
  var aboutImg = document.querySelector('.about__bg img');
  var ticking = false;
  function parallax() {
    if (!reduceMotion) {
      if (heroImg) {
        var y = window.scrollY;
        if (y < window.innerHeight * 1.2) heroImg.style.transform = 'translateY(' + y * 0.22 + 'px)';
      }
      if (aboutImg) {
        var r = aboutImg.closest('.about').getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          var p = (window.innerHeight - r.top) / (window.innerHeight + r.height);
          aboutImg.style.transform = 'translateY(' + ((p - 0.5) * -46) + 'px)';
        }
      }
    }
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    onScrollHeader(); onScrollThread();
    if (!ticking) { requestAnimationFrame(parallax); ticking = true; }
  }, { passive: true });

  /* ─────────────── mobile menu ─────────────────────── */
  var burger = document.getElementById('burger');
  var mmenu = document.getElementById('mmenu');
  function closeMenu() {
    document.body.classList.remove('menu-open');
    burger.setAttribute('aria-expanded', 'false');
    mmenu.setAttribute('aria-hidden', 'true');
    onScrollHeader();
  }
  burger.addEventListener('click', function () {
    var open = document.body.classList.toggle('menu-open');
    burger.setAttribute('aria-expanded', String(open));
    mmenu.setAttribute('aria-hidden', String(!open));
    if (open) document.body.classList.remove('hero-on');
    else onScrollHeader();
  });
  mmenu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });

  /* ─────────────── reveal on scroll ────────────────── */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -6% 0px' });
  document.querySelectorAll('.reveal, .reveal-img').forEach(function (el) { io.observe(el); });

  /* ─────────────── route line draw ─────────────────── */
  var route = document.getElementById('routePath');
  if (route && !reduceMotion) {
    var len = route.getTotalLength();
    route.style.strokeDasharray = len;
    route.style.strokeDashoffset = len;
    route.style.transition = 'stroke-dashoffset 2.6s cubic-bezier(.3,.6,.3,1) .5s';
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { route.style.strokeDashoffset = '0'; });
    });
  }

  /* ─────────────── counters ────────────────────────── */
  var cio = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      var el = en.target, target = parseInt(el.getAttribute('data-count'), 10) || 0;
      cio.unobserve(el);
      if (reduceMotion) { el.textContent = target; return; }
      var t0 = null;
      function step(ts) {
        if (!t0) t0 = ts;
        var p = Math.min((ts - t0) / 1400, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('.counter').forEach(function (el) { cio.observe(el); });

  /* ─────────────── card tilt (desktop, fine pointer) ─ */
  if (window.matchMedia('(pointer: fine)').matches && !reduceMotion) {
    document.querySelectorAll('.tilt').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var r = card.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = 'perspective(900px) rotateX(' + (-y * 4) + 'deg) rotateY(' + (x * 5) + 'deg) translateY(-4px)';
      });
      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
        card.style.transition = 'transform .5s cubic-bezier(.22,.8,.3,1)';
        setTimeout(function () { card.style.transition = ''; }, 500);
      });
    });

    /* magnetic buttons */
    document.querySelectorAll('.btn--gold, .btn--blue, .btn--wa').forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var r = btn.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width / 2) * 0.18;
        var y = (e.clientY - r.top - r.height / 2) * 0.3;
        btn.style.transform = 'translate(' + x + 'px,' + (y - 2) + 'px)';
      });
      btn.addEventListener('mouseleave', function () { btn.style.transform = ''; });
    });
  }

  /* ─────────────── WhatsApp helpers ────────────────── */
  var WA_NUMBERS = {
    excursion: '77080243941',
    tour: '77008821000',
    training: '77078281548',
    general: '77078281548'
  };

  function waLink(kind, text) {
    var num = WA_NUMBERS[kind] || WA_NUMBERS.general;
    var msg = text || I18N[currentLang]['wa_msg_' + kind] || I18N[currentLang].wa_msg_general;
    return 'https://wa.me/' + num + '?text=' + encodeURIComponent(msg);
  }

  /* delegated clicks: tel + WhatsApp (clean hooks for future gtag conversions) */
  document.addEventListener('click', function (e) {
    var wa = e.target.closest('a[data-wa]');
    if (wa) {
      wa.setAttribute('href', waLink(wa.getAttribute('data-wa')));
      /* gtag hook: wa.dataset.wa is the intent (excursion|tour|training|general) */
      return;
    }
    var tel = e.target.closest('a[href^="tel:"]');
    if (tel) {
      /* gtag hook: phone click */
      return;
    }
  });

  /* ─────────────── contact form → WhatsApp ─────────── */
  var form = document.getElementById('cform');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = (form.elements.name.value || '').trim();
      var topic = form.elements.topic.value || 'general';
      var message = (form.elements.message.value || '').trim();
      var dict = I18N[currentLang];
      var base = dict['wa_msg_' + topic] || dict.wa_msg_general;
      var text = base + (name ? '\n' + dict.cf_name + ': ' + name : '') + (message ? '\n' + message : '');
      var url = waLink(topic, text);
      document.getElementById('cformThanks').hidden = false;
      window.open(url, '_blank', 'noopener');
      /* gtag hook: form submit, topic = topic */
    });
  }

  /* ─────────────── init ────────────────────────────── */
  var saved = null;
  try { saved = localStorage.getItem(LANG_KEY); } catch (e) {}
  if (saved && I18N[saved]) {
    applyLang(saved);
  } else {
    splitHeroTitle();
  }
  onScrollHeader();
  onScrollThread();
})();
