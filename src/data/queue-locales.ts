export const queueLocaleCodes = [
  "ja",
  "en",
  "zh-CN",
  "zh-TW",
  "ko",
  "th",
  "vi",
  "id",
  "ms",
  "fil",
  "fr",
  "es",
  "de",
  "it",
  "pt",
  "nl",
  "pl",
  "ru",
  "uk",
  "el",
] as const;

export type QueueLocale = (typeof queueLocaleCodes)[number];
export type QueueLocaleGroup = "recommended" | "asia" | "europe";

export interface QueueLocaleMeta {
  code: QueueLocale;
  nativeName: string;
  japaneseName: string;
  englishName: string;
  group: QueueLocaleGroup;
  dir: "ltr" | "rtl";
}

export const queueLocaleMeta: QueueLocaleMeta[] = [
  { code: "ja", nativeName: "日本語", japaneseName: "日本語", englishName: "Japanese", group: "recommended", dir: "ltr" },
  { code: "en", nativeName: "English", japaneseName: "英語", englishName: "English", group: "recommended", dir: "ltr" },
  { code: "zh-CN", nativeName: "简体中文", japaneseName: "中国語・簡体字", englishName: "Chinese (Simplified)", group: "recommended", dir: "ltr" },
  { code: "zh-TW", nativeName: "繁體中文", japaneseName: "中国語・繁体字", englishName: "Chinese (Traditional)", group: "recommended", dir: "ltr" },
  { code: "ko", nativeName: "한국어", japaneseName: "韓国語", englishName: "Korean", group: "recommended", dir: "ltr" },
  { code: "th", nativeName: "ไทย", japaneseName: "タイ語", englishName: "Thai", group: "asia", dir: "ltr" },
  { code: "vi", nativeName: "Tiếng Việt", japaneseName: "ベトナム語", englishName: "Vietnamese", group: "asia", dir: "ltr" },
  { code: "id", nativeName: "Bahasa Indonesia", japaneseName: "インドネシア語", englishName: "Indonesian", group: "asia", dir: "ltr" },
  { code: "ms", nativeName: "Bahasa Melayu", japaneseName: "マレー語", englishName: "Malay", group: "asia", dir: "ltr" },
  { code: "fil", nativeName: "Filipino", japaneseName: "フィリピン語／タガログ語", englishName: "Filipino / Tagalog", group: "asia", dir: "ltr" },
  { code: "fr", nativeName: "Français", japaneseName: "フランス語", englishName: "French", group: "europe", dir: "ltr" },
  { code: "es", nativeName: "Español", japaneseName: "スペイン語", englishName: "Spanish", group: "europe", dir: "ltr" },
  { code: "de", nativeName: "Deutsch", japaneseName: "ドイツ語", englishName: "German", group: "europe", dir: "ltr" },
  { code: "it", nativeName: "Italiano", japaneseName: "イタリア語", englishName: "Italian", group: "europe", dir: "ltr" },
  { code: "pt", nativeName: "Português", japaneseName: "ポルトガル語", englishName: "Portuguese", group: "europe", dir: "ltr" },
  { code: "nl", nativeName: "Nederlands", japaneseName: "オランダ語", englishName: "Dutch", group: "europe", dir: "ltr" },
  { code: "pl", nativeName: "Polski", japaneseName: "ポーランド語", englishName: "Polish", group: "europe", dir: "ltr" },
  { code: "ru", nativeName: "Русский", japaneseName: "ロシア語", englishName: "Russian", group: "europe", dir: "ltr" },
  { code: "uk", nativeName: "Українська", japaneseName: "ウクライナ語", englishName: "Ukrainian", group: "europe", dir: "ltr" },
  { code: "el", nativeName: "Ελληνικά", japaneseName: "ギリシャ語", englishName: "Greek", group: "europe", dir: "ltr" },
];

export const queueLocaleGroups: Array<{ id: QueueLocaleGroup; label: string }> = [
  { id: "recommended", label: "おすすめの言語" },
  { id: "asia", label: "東南アジア" },
  { id: "europe", label: "Europe" },
];

export interface QueueTranslation {
  common: {
    minutes: string;
  };
  languageSelector: {
    choose: string;
    recommended: string;
    other: string;
    search: string;
    selected: string;
    noResults: string;
  };
  queue: {
    reception: {
      title: string;
      currentWaiting: string;
      estimatedWait: string;
      accept: string;
      startReception: string;
      selectPartySize: string;
      nameOrNickname: string;
      optional: string;
      review: string;
      confirm: string;
      back: string;
    };
    completion: {
      complete: string;
      yourNumber: string;
      currentCalling: string;
      ahead: string;
      estimatedWait: string;
      keepOpen: string;
      cancel: string;
      review: string;
    };
    status: {
      accepted: string;
      waiting: string;
      soon: string;
      calling: string;
      askStaff: string;
      completed: string;
      cancelled: string;
    };
    errors: {
      outsideHours: string;
      closed: string;
      limitReached: string;
      checkConnection: string;
      failed: string;
      tryAgain: string;
      contactStaff: string;
    };
  };
}

type TranslationRow = readonly [string, ...string[]];

// Column order always follows queueLocaleCodes. Keeping each phrase on one row
// makes missing locales mechanically detectable while preserving feature groups.
const commonRows: TranslationRow[] = [
  ["minutes", "分", "min", "分钟", "分鐘", "분", "นาที", "phút", "menit", "minit", "minuto", "min", "min", "Min.", "min", "min", "min.", "min", "мин", "хв", "λεπ."],
];

const selectorRows: TranslationRow[] = [
  ["choose", "言語を選択", "Choose a language", "选择语言", "選擇語言", "언어 선택", "เลือกภาษา", "Chọn ngôn ngữ", "Pilih bahasa", "Pilih bahasa", "Pumili ng wika", "Choisir la langue", "Elegir idioma", "Sprache auswählen", "Scegli la lingua", "Escolher idioma", "Kies een taal", "Wybierz język", "Выберите язык", "Виберіть мову", "Επιλέξτε γλώσσα"],
  ["recommended", "おすすめの言語", "Recommended languages", "推荐语言", "推薦語言", "추천 언어", "ภาษาที่แนะนำ", "Ngôn ngữ đề xuất", "Bahasa yang disarankan", "Bahasa disyorkan", "Mga inirerekomendang wika", "Langues recommandées", "Idiomas recomendados", "Empfohlene Sprachen", "Lingue consigliate", "Idiomas recomendados", "Aanbevolen talen", "Polecane języki", "Рекомендуемые языки", "Рекомендовані мови", "Προτεινόμενες γλώσσες"],
  ["other", "その他の言語", "Other languages", "其他语言", "其他語言", "기타 언어", "ภาษาอื่น ๆ", "Ngôn ngữ khác", "Bahasa lainnya", "Bahasa lain", "Iba pang mga wika", "Autres langues", "Otros idiomas", "Weitere Sprachen", "Altre lingue", "Outros idiomas", "Andere talen", "Inne języki", "Другие языки", "Інші мови", "Άλλες γλώσσες"],
  ["search", "言語を検索", "Search languages", "搜索语言", "搜尋語言", "언어 검색", "ค้นหาภาษา", "Tìm kiếm ngôn ngữ", "Cari bahasa", "Cari bahasa", "Maghanap ng wika", "Rechercher une langue", "Buscar idiomas", "Sprachen suchen", "Cerca lingua", "Pesquisar idiomas", "Zoek talen", "Szukaj języka", "Поиск языка", "Пошук мови", "Αναζήτηση γλώσσας"],
  ["selected", "選択した言語で表示します", "Displayed in the selected language", "将以所选语言显示", "將以所選語言顯示", "선택한 언어로 표시합니다", "จะแสดงด้วยภาษาที่เลือก", "Hiển thị bằng ngôn ngữ đã chọn", "Ditampilkan dalam bahasa yang dipilih", "Dipaparkan dalam bahasa yang dipilih", "Ipapakita sa napiling wika", "Affichage dans la langue choisie", "Se mostrará en el idioma elegido", "Anzeige in der gewählten Sprache", "Visualizzazione nella lingua scelta", "Exibido no idioma selecionado", "Weergave in de gekozen taal", "Wyświetlanie w wybranym języku", "Отображение на выбранном языке", "Відображення вибраною мовою", "Εμφάνιση στην επιλεγμένη γλώσσα"],
  ["noResults", "該当する言語が見つかりませんでした", "No matching language found", "未找到匹配的语言", "找不到符合的語言", "일치하는 언어가 없습니다", "ไม่พบภาษาที่ตรงกัน", "Không tìm thấy ngôn ngữ phù hợp", "Bahasa tidak ditemukan", "Bahasa tidak ditemui", "Walang nahanap na wika", "Aucune langue correspondante", "No se encontró ningún idioma", "Keine passende Sprache gefunden", "Nessuna lingua trovata", "Nenhum idioma encontrado", "Geen taal gevonden", "Nie znaleziono języka", "Подходящий язык не найден", "Мову не знайдено", "Δεν βρέθηκε γλώσσα"],
];

const receptionRows: TranslationRow[] = [
  ["title", "順番待ち受付", "Queue reception", "排队登记", "候位登記", "대기 접수", "ลงทะเบียนคิว", "Đăng ký xếp hàng", "Pendaftaran antrean", "Pendaftaran giliran", "Pagpapalista sa pila", "Inscription à la file", "Registro de espera", "Warteschlangen-Anmeldung", "Registrazione alla coda", "Registro na fila", "Aanmelden voor de wachtrij", "Rejestracja w kolejce", "Регистрация в очереди", "Реєстрація в черзі", "Εγγραφή στην ουρά"],
  ["currentWaiting", "現在の待ち人数", "Groups currently waiting", "当前等候组数", "目前等候組數", "현재 대기 팀 수", "จำนวนกลุ่มที่รออยู่", "Số nhóm đang chờ", "Jumlah grup menunggu", "Bilangan kumpulan menunggu", "Mga grupong naghihintay", "Groupes en attente", "Grupos en espera", "Aktuell wartende Gruppen", "Gruppi in attesa", "Grupos aguardando", "Wachtende groepen", "Grupy oczekujące", "Групп в ожидании", "Груп у черзі", "Ομάδες σε αναμονή"],
  ["estimatedWait", "待ち時間の目安", "Estimated wait", "预计等候时间", "預計等候時間", "예상 대기 시간", "เวลารอโดยประมาณ", "Thời gian chờ dự kiến", "Perkiraan waktu tunggu", "Anggaran masa menunggu", "Tinatayang oras ng paghihintay", "Temps d’attente estimé", "Espera estimada", "Geschätzte Wartezeit", "Attesa stimata", "Espera estimada", "Geschatte wachttijd", "Szacowany czas oczekiwania", "Ожидаемое время", "Орієнтовний час очікування", "Εκτιμώμενος χρόνος αναμονής"],
  ["accept", "受付する", "Join the queue", "开始排队", "加入候位", "접수하기", "รับบัตรคิว", "Đăng ký", "Ambil antrean", "Daftar giliran", "Pumila", "S’inscrire", "Unirse a la lista", "Anmelden", "Mettiti in coda", "Entrar na fila", "Aanmelden", "Dołącz do kolejki", "Встать в очередь", "Стати в чергу", "Μπείτε στην ουρά"],
  ["startReception", "受付を開始します", "Start your reception", "开始登记", "開始登記", "접수를 시작합니다", "เริ่มลงทะเบียน", "Bắt đầu đăng ký", "Mulai pendaftaran", "Mulakan pendaftaran", "Simulan ang pagpapalista", "Commencer l’inscription", "Iniciar el registro", "Anmeldung starten", "Inizia la registrazione", "Iniciar registro", "Aanmelding starten", "Rozpocznij rejestrację", "Начать регистрацию", "Почати реєстрацію", "Έναρξη εγγραφής"],
  ["selectPartySize", "人数を選択してください", "Select your party size", "请选择人数", "請選擇人數", "인원을 선택해 주세요", "เลือกจำนวนคน", "Chọn số người", "Pilih jumlah orang", "Pilih bilangan orang", "Piliin ang bilang ng tao", "Choisissez le nombre de personnes", "Selecciona el número de personas", "Personenzahl auswählen", "Seleziona il numero di persone", "Selecione o número de pessoas", "Kies het aantal personen", "Wybierz liczbę osób", "Выберите число гостей", "Виберіть кількість гостей", "Επιλέξτε αριθμό ατόμων"],
  ["nameOrNickname", "お名前またはニックネーム", "Name or nickname", "姓名或昵称", "姓名或暱稱", "이름 또는 닉네임", "ชื่อหรือชื่อเล่น", "Tên hoặc biệt danh", "Nama atau nama panggilan", "Nama atau nama samaran", "Pangalan o palayaw", "Nom ou surnom", "Nombre o apodo", "Name oder Spitzname", "Nome o soprannome", "Nome ou apelido", "Naam of bijnaam", "Imię lub pseudonim", "Имя или псевдоним", "Ім’я або псевдонім", "Όνομα ή ψευδώνυμο"],
  ["optional", "入力は任意です", "Optional", "选填", "選填", "선택 입력", "ไม่จำเป็นต้องกรอก", "Không bắt buộc", "Opsional", "Pilihan", "Opsyonal", "Facultatif", "Opcional", "Optional", "Facoltativo", "Opcional", "Optioneel", "Opcjonalne", "Необязательно", "Необов’язково", "Προαιρετικό"],
  ["review", "受付内容を確認する", "Review reception details", "确认登记内容", "確認登記內容", "접수 내용 확인", "ตรวจสอบข้อมูลการลงทะเบียน", "Kiểm tra thông tin đăng ký", "Tinjau detail pendaftaran", "Semak butiran pendaftaran", "Suriin ang detalye", "Vérifier les informations", "Revisar los datos", "Angaben prüfen", "Controlla i dati", "Revisar dados", "Gegevens controleren", "Sprawdź dane", "Проверить данные", "Перевірити дані", "Έλεγχος στοιχείων"],
  ["confirm", "受付を確定する", "Confirm reception", "确认登记", "確認登記", "접수 확정", "ยืนยันการลงทะเบียน", "Xác nhận đăng ký", "Konfirmasi pendaftaran", "Sahkan pendaftaran", "Kumpirmahin ang pagpapalista", "Confirmer l’inscription", "Confirmar registro", "Anmeldung bestätigen", "Conferma registrazione", "Confirmar registro", "Aanmelding bevestigen", "Potwierdź rejestrację", "Подтвердить регистрацию", "Підтвердити реєстрацію", "Επιβεβαίωση εγγραφής"],
  ["back", "戻る", "Back", "返回", "返回", "뒤로", "ย้อนกลับ", "Quay lại", "Kembali", "Kembali", "Bumalik", "Retour", "Volver", "Zurück", "Indietro", "Voltar", "Terug", "Wstecz", "Назад", "Назад", "Πίσω"],
];

const completionRows: TranslationRow[] = [
  ["complete", "受付が完了しました", "Reception complete", "登记完成", "登記完成", "접수가 완료되었습니다", "ลงทะเบียนเรียบร้อย", "Đăng ký hoàn tất", "Pendaftaran selesai", "Pendaftaran selesai", "Tapos na ang pagpapalista", "Inscription terminée", "Registro completado", "Anmeldung abgeschlossen", "Registrazione completata", "Registro concluído", "Aanmelding voltooid", "Rejestracja zakończona", "Регистрация завершена", "Реєстрацію завершено", "Η εγγραφή ολοκληρώθηκε"],
  ["yourNumber", "あなたの受付番号", "Your number", "您的号码", "您的號碼", "접수 번호", "หมายเลขคิวของคุณ", "Số thứ tự của bạn", "Nomor antrean Anda", "Nombor giliran anda", "Numero mo", "Votre numéro", "Tu número", "Ihre Nummer", "Il tuo numero", "Seu número", "Uw nummer", "Twój numer", "Ваш номер", "Ваш номер", "Ο αριθμός σας"],
  ["currentCalling", "現在の呼び出し番号", "Now calling", "当前叫号", "目前叫號", "현재 호출 번호", "หมายเลขที่กำลังเรียก", "Số đang gọi", "Nomor yang dipanggil", "Nombor sedang dipanggil", "Kasalukuyang tinatawag", "Numéro appelé", "Número actual", "Aktueller Aufruf", "Numero chiamato", "Número chamado", "Nu aan de beurt", "Aktualnie wywoływany", "Сейчас вызывают", "Зараз викликають", "Τρέχουσα κλήση"],
  ["ahead", "あなたの前に待っている組数", "Groups ahead of you", "您前面的等候组数", "您前面的等候組數", "앞에 대기 중인 팀", "จำนวนกลุ่มก่อนหน้าคุณ", "Số nhóm trước bạn", "Grup di depan Anda", "Kumpulan sebelum anda", "Mga grupong nauuna sa iyo", "Groupes avant vous", "Grupos delante de ti", "Gruppen vor Ihnen", "Gruppi prima di te", "Grupos à sua frente", "Groepen voor u", "Grupy przed tobą", "Групп перед вами", "Груп перед вами", "Ομάδες πριν από εσάς"],
  ["estimatedWait", "待ち時間の目安", "Estimated wait", "预计等候时间", "預計等候時間", "예상 대기 시간", "เวลารอโดยประมาณ", "Thời gian chờ dự kiến", "Perkiraan waktu tunggu", "Anggaran masa menunggu", "Tinatayang oras ng paghihintay", "Temps d’attente estimé", "Espera estimada", "Geschätzte Wartezeit", "Attesa stimata", "Espera estimada", "Geschatte wachttijd", "Szacowany czas oczekiwania", "Ожидаемое время", "Орієнтовний час очікування", "Εκτιμώμενος χρόνος αναμονής"],
  ["keepOpen", "この画面を閉じずにお待ちください", "Please keep this screen open", "请保持此页面打开", "請保持此畫面開啟", "이 화면을 닫지 말고 기다려 주세요", "โปรดเปิดหน้าจอนี้ไว้", "Vui lòng giữ màn hình này mở", "Biarkan layar ini tetap terbuka", "Sila biarkan skrin ini terbuka", "Panatilihing bukas ang screen na ito", "Gardez cet écran ouvert", "Mantén esta pantalla abierta", "Bitte lassen Sie diesen Bildschirm geöffnet", "Lascia aperta questa schermata", "Mantenha esta tela aberta", "Houd dit scherm geopend", "Pozostaw ten ekran otwarty", "Не закрывайте этот экран", "Не закривайте цей екран", "Κρατήστε αυτή την οθόνη ανοιχτή"],
  ["cancel", "受付を取り消す", "Cancel reception", "取消登记", "取消登記", "접수 취소", "ยกเลิกการลงทะเบียน", "Hủy đăng ký", "Batalkan pendaftaran", "Batalkan pendaftaran", "Kanselahin ang pagpapalista", "Annuler l’inscription", "Cancelar registro", "Anmeldung stornieren", "Annulla registrazione", "Cancelar registro", "Aanmelding annuleren", "Anuluj rejestrację", "Отменить регистрацию", "Скасувати реєстрацію", "Ακύρωση εγγραφής"],
  ["review", "受付内容を確認する", "Review reception details", "确认登记内容", "確認登記內容", "접수 내용 확인", "ตรวจสอบข้อมูลการลงทะเบียน", "Kiểm tra thông tin đăng ký", "Tinjau detail pendaftaran", "Semak butiran pendaftaran", "Suriin ang detalye", "Vérifier les informations", "Revisar los datos", "Angaben prüfen", "Controlla i dati", "Revisar dados", "Gegevens controleren", "Sprawdź dane", "Проверить данные", "Перевірити дані", "Έλεγχος στοιχείων"],
];

const statusRows: TranslationRow[] = [
  ["accepted", "受付済み", "Accepted", "已登记", "已登記", "접수 완료", "รับลงทะเบียนแล้ว", "Đã tiếp nhận", "Terdaftar", "Diterima", "Nakatala", "Inscription reçue", "Registrado", "Angemeldet", "Registrato", "Registrado", "Aangemeld", "Przyjęto", "Принято", "Прийнято", "Καταχωρίστηκε"],
  ["waiting", "待機中", "Waiting", "等候中", "等候中", "대기 중", "กำลังรอ", "Đang chờ", "Menunggu", "Menunggu", "Naghihintay", "En attente", "En espera", "Warten", "In attesa", "Aguardando", "Wachten", "Oczekiwanie", "Ожидание", "Очікування", "Αναμονή"],
  ["soon", "まもなく呼び出します", "You will be called soon", "即将叫号", "即將叫號", "곧 호출합니다", "ใกล้ถึงคิวของคุณแล้ว", "Sắp đến lượt bạn", "Anda akan segera dipanggil", "Anda akan dipanggil sebentar lagi", "Tatawagin ka na sa ilang sandali", "Vous serez bientôt appelé", "Te llamaremos pronto", "Sie werden gleich aufgerufen", "Sarai chiamato a breve", "Você será chamado em breve", "U wordt zo opgeroepen", "Wkrótce zostaniesz wywołany", "Вас скоро вызовут", "Вас скоро викличуть", "Θα κληθείτε σύντομα"],
  ["calling", "お呼び出し中です", "Now calling you", "正在叫您", "正在叫您", "호출 중입니다", "กำลังเรียกคิวของคุณ", "Đang gọi bạn", "Anda sedang dipanggil", "Giliran anda sedang dipanggil", "Tinatawag ka na", "Nous vous appelons", "Te estamos llamando", "Sie werden aufgerufen", "Ti stiamo chiamando", "Estamos chamando você", "U wordt nu opgeroepen", "Właśnie cię wywołujemy", "Вас вызывают", "Вас викликають", "Σας καλούμε τώρα"],
  ["askStaff", "店舗スタッフへお声がけください", "Please speak to a staff member", "请联系店员", "請告知店員", "매장 직원에게 말씀해 주세요", "โปรดติดต่อพนักงาน", "Vui lòng liên hệ nhân viên", "Silakan hubungi staf", "Sila hubungi kakitangan", "Lumapit sa staff", "Veuillez vous adresser au personnel", "Habla con el personal", "Bitte wenden Sie sich an das Personal", "Rivolgiti al personale", "Fale com a equipe", "Meld u bij een medewerker", "Zgłoś się do personelu", "Обратитесь к сотруднику", "Зверніться до працівника", "Μιλήστε με το προσωπικό"],
  ["completed", "受付が完了しました", "Reception completed", "登记已完成", "登記已完成", "접수가 완료되었습니다", "เสร็จสิ้นการลงทะเบียน", "Đăng ký đã hoàn tất", "Pendaftaran selesai", "Pendaftaran selesai", "Nakumpleto ang pagpapalista", "Inscription terminée", "Registro completado", "Anmeldung abgeschlossen", "Registrazione completata", "Registro concluído", "Aanmelding voltooid", "Rejestracja zakończona", "Регистрация завершена", "Реєстрацію завершено", "Η εγγραφή ολοκληρώθηκε"],
  ["cancelled", "受付が取り消されました", "Reception cancelled", "登记已取消", "登記已取消", "접수가 취소되었습니다", "ยกเลิกการลงทะเบียนแล้ว", "Đã hủy đăng ký", "Pendaftaran dibatalkan", "Pendaftaran dibatalkan", "Kinansela ang pagpapalista", "Inscription annulée", "Registro cancelado", "Anmeldung storniert", "Registrazione annullata", "Registro cancelado", "Aanmelding geannuleerd", "Rejestracja anulowana", "Регистрация отменена", "Реєстрацію скасовано", "Η εγγραφή ακυρώθηκε"],
];

const errorRows: TranslationRow[] = [
  ["outsideHours", "現在は受付時間外です", "Reception is currently closed", "当前不在登记时间", "目前非登記時間", "현재 접수 시간이 아닙니다", "ขณะนี้อยู่นอกเวลารับคิว", "Hiện ngoài giờ tiếp nhận", "Saat ini di luar jam pendaftaran", "Di luar waktu pendaftaran", "Sarado ang pagpapalista sa oras na ito", "Les inscriptions sont fermées", "El registro está cerrado", "Die Anmeldung ist derzeit geschlossen", "Le registrazioni sono chiuse", "O registro está fechado", "Aanmelding is nu gesloten", "Rejestracja jest teraz zamknięta", "Регистрация сейчас закрыта", "Реєстрація зараз закрита", "Η εγγραφή είναι κλειστή"],
  ["closed", "本日の受付は終了しました", "Reception has ended for today", "今日登记已结束", "今日登記已結束", "오늘 접수가 마감되었습니다", "ปิดรับคิวสำหรับวันนี้แล้ว", "Đã kết thúc tiếp nhận hôm nay", "Pendaftaran hari ini telah ditutup", "Pendaftaran hari ini telah tamat", "Tapos na ang pagpapalista ngayong araw", "Les inscriptions sont terminées pour aujourd’hui", "El registro ha finalizado por hoy", "Die Anmeldung ist für heute beendet", "Le registrazioni sono terminate per oggi", "O registro de hoje foi encerrado", "Aanmelding is vandaag beëindigd", "Rejestracja na dziś zakończona", "Регистрация на сегодня завершена", "Реєстрацію на сьогодні завершено", "Η εγγραφή ολοκληρώθηκε για σήμερα"],
  ["limitReached", "受付上限に達しました", "Reception limit reached", "已达到登记上限", "已達登記上限", "접수 한도에 도달했습니다", "จำนวนคิวเต็มแล้ว", "Đã đạt giới hạn tiếp nhận", "Batas pendaftaran tercapai", "Had pendaftaran telah dicapai", "Naabot na ang limitasyon", "La limite d’inscription est atteinte", "Se alcanzó el límite", "Anmeldelimit erreicht", "Limite di registrazione raggiunto", "Limite de registros atingido", "Aanmeldlimiet bereikt", "Osiągnięto limit rejestracji", "Достигнут лимит", "Досягнуто ліміту", "Συμπληρώθηκε το όριο"],
  ["checkConnection", "通信状況を確認してください", "Check your connection", "请检查网络连接", "請檢查網路連線", "연결 상태를 확인해 주세요", "โปรดตรวจสอบการเชื่อมต่อ", "Vui lòng kiểm tra kết nối", "Periksa koneksi Anda", "Periksa sambungan anda", "Suriin ang iyong koneksyon", "Vérifiez votre connexion", "Comprueba tu conexión", "Bitte Verbindung prüfen", "Controlla la connessione", "Verifique sua conexão", "Controleer uw verbinding", "Sprawdź połączenie", "Проверьте подключение", "Перевірте з’єднання", "Ελέγξτε τη σύνδεσή σας"],
  ["failed", "処理に失敗しました", "The operation failed", "处理失败", "處理失敗", "처리에 실패했습니다", "ดำเนินการไม่สำเร็จ", "Xử lý không thành công", "Proses gagal", "Proses gagal", "Hindi nagtagumpay ang proseso", "L’opération a échoué", "La operación falló", "Vorgang fehlgeschlagen", "Operazione non riuscita", "A operação falhou", "Bewerking mislukt", "Operacja nie powiodła się", "Операция не выполнена", "Операція не вдалася", "Η ενέργεια απέτυχε"],
  ["tryAgain", "もう一度お試しください", "Please try again", "请重试", "請再試一次", "다시 시도해 주세요", "โปรดลองอีกครั้ง", "Vui lòng thử lại", "Silakan coba lagi", "Sila cuba lagi", "Subukan muli", "Veuillez réessayer", "Inténtalo de nuevo", "Bitte erneut versuchen", "Riprova", "Tente novamente", "Probeer opnieuw", "Spróbuj ponownie", "Попробуйте снова", "Спробуйте ще раз", "Δοκιμάστε ξανά"],
  ["contactStaff", "店舗スタッフへお問い合わせください", "Please contact a staff member", "请联系店员", "請聯絡店員", "매장 직원에게 문의해 주세요", "โปรดติดต่อพนักงาน", "Vui lòng liên hệ nhân viên", "Silakan hubungi staf", "Sila hubungi kakitangan", "Makipag-ugnayan sa staff", "Contactez le personnel", "Contacta con el personal", "Bitte Personal kontaktieren", "Contatta il personale", "Entre em contato com a equipe", "Neem contact op met een medewerker", "Skontaktuj się z personelem", "Обратитесь к сотруднику", "Зверніться до працівника", "Επικοινωνήστε με το προσωπικό"],
];

function makeSection(rows: TranslationRow[], localeIndex: number): Record<string, string> {
  return Object.fromEntries(
    rows.map(([key, ...values]) => [key, values[localeIndex] || values[0]]),
  );
}

export const queueTranslations = Object.fromEntries(
  queueLocaleCodes.map((locale, localeIndex) => [
    locale,
    {
      common: makeSection(commonRows, localeIndex),
      languageSelector: makeSection(selectorRows, localeIndex),
      queue: {
        reception: makeSection(receptionRows, localeIndex),
        completion: makeSection(completionRows, localeIndex),
        status: makeSection(statusRows, localeIndex),
        errors: makeSection(errorRows, localeIndex),
      },
    },
  ]),
) as unknown as Record<QueueLocale, QueueTranslation>;

export const queueRequiredTranslationKeys = {
  common: commonRows.map(([key]) => key),
  languageSelector: selectorRows.map(([key]) => key),
  reception: receptionRows.map(([key]) => key),
  completion: completionRows.map(([key]) => key),
  status: statusRows.map(([key]) => key),
  errors: errorRows.map(([key]) => key),
} as const;

export const queueTranslationRowWidths = [
  ...commonRows,
  ...selectorRows,
  ...receptionRows,
  ...completionRows,
  ...statusRows,
  ...errorRows,
].map((row) => ({ key: row[0], width: row.length }));

export function isQueueLocale(value: string | null | undefined): value is QueueLocale {
  return queueLocaleCodes.includes(value as QueueLocale);
}

export function getQueueTranslation(locale: string | null | undefined): QueueTranslation {
  return isQueueLocale(locale) ? queueTranslations[locale] : queueTranslations.ja;
}

export function resolveQueueLocale(languages: readonly string[]): QueueLocale {
  for (const originalLanguage of languages) {
    const language = originalLanguage.trim().toLowerCase().replace("_", "-");
    if (!language) continue;

    if (/^zh-(tw|hk|mo|hant)/.test(language)) return "zh-TW";
    if (/^zh-(cn|sg|hans)/.test(language) || language === "zh") return "zh-CN";
    if (language === "tl" || language.startsWith("tl-")) return "fil";

    const exact = queueLocaleCodes.find((locale) => locale.toLowerCase() === language);
    if (exact) return exact;

    const base = language.split("-")[0];
    const baseMatch = queueLocaleCodes.find((locale) => locale.toLowerCase() === base);
    if (baseMatch) return baseMatch;
  }

  return "ja";
}

export function searchQueueLocales(query: string): QueueLocaleMeta[] {
  const normalizedQuery = query.trim().toLocaleLowerCase();
  if (!normalizedQuery) return queueLocaleMeta;

  return queueLocaleMeta.filter((locale) =>
    [locale.nativeName, locale.japaneseName, locale.englishName, locale.code]
      .join(" ")
      .toLocaleLowerCase()
      .includes(normalizedQuery),
  );
}
