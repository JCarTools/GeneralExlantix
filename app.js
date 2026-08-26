const TOKEN = "SECURE_TOKEN_2025";
const SLOT_COUNT = 12;
const STORAGE_KEY = "generic_exlantix_slots_v1";

const FALLBACK_ACTIONS = [
  "GO_TO_PP", "RUN_BLACK", "OPEN_SHTORKA", "CLOSE_SHTORKA", "VIBOR_VODITEL",
  "GO_TO_GU", "RUN_START_APP_MENU", "GLOBAL_BACK", "GLOBAL_HOME", "TOGGLE_GU_PP",
  "RUN_FUN_CAR", "TOGGLE_GU_PP_CPP", "GO_CPP_TO_PP", "TOGGLE_CPP_PP",
  "MEDIA_PLAY", "MEDIA_PAUSE", "MEDIA_NEXT", "MEDIA_BLACK", "VIEW_ALL_MESSAGE",
  "b_fiksik_on", "b_fiksik_off",
  "heat_seat_l_0", "heat_seat_l_1", "heat_seat_l_2", "heat_seat_l_3",
  "vent_seat_l_0", "vent_seat_l_1", "vent_seat_l_2", "vent_seat_l_3",
  "heat_seat_r_0", "heat_seat_r_1", "heat_seat_r_2", "heat_seat_r_3",
  "vent_seat_r_0", "vent_seat_r_1", "vent_seat_r_2", "vent_seat_r_3",
  "heat_wheel_on", "heat_wheel_off", "heat_windshield_on", "heat_windshield_off",
  "heat_rearwindow_on", "heat_rearwindow_off",
  "heat_zad_seat_l_0", "heat_zad_seat_l_1", "heat_zad_seat_l_2", "heat_zad_seat_l_3",
  "heat_zad_seat_r_off", "heat_zad_seat_r_1", "heat_zad_seat_r_2", "heat_zad_seat_r_3",
  "voditel_seat_1", "voditel_seat_2", "voditel_seat_3", "SPLIT_RUN", "RUN_APP_MORE",
  "RUN_SPICH_FOCUS", "Recirculation_On", "Recirculation_Off", "Volume_Down", "Volume_Up",
  "Driver_Temp_Down", "Driver_Temp_Up", "Passenger_Temp_Down", "Passenger_Temp_Up",
  "vent_zad_seat_l_0", "vent_zad_seat_l_1", "vent_zad_seat_l_2", "vent_zad_seat_l_3",
  "vent_zad_seat_r_off", "vent_zad_seat_r_1", "vent_zad_seat_r_2", "vent_zad_seat_r_3",
  "RECENT_TASK_MANAGER", "MEDIA_PLAY_PAUSE", "TOGGLE_MOCK_GPS"
];

const LEVEL_GROUPS = [
  { id: "heat_seat_l", label: "Подогрев водителя", detail: "Переднее левое сиденье", icon: "♨", tone: "warm", off: "heat_seat_l_0" },
  { id: "vent_seat_l", label: "Вентиляция водителя", detail: "Переднее левое сиденье", icon: "❄", tone: "cool", off: "vent_seat_l_0" },
  { id: "heat_seat_r", label: "Подогрев пассажира", detail: "Переднее правое сиденье", icon: "♨", tone: "warm", off: "heat_seat_r_0" },
  { id: "vent_seat_r", label: "Вентиляция пассажира", detail: "Переднее правое сиденье", icon: "❄", tone: "cool", off: "vent_seat_r_0" },
  { id: "heat_zad_seat_l", label: "Подогрев сзади слева", detail: "Заднее левое сиденье", icon: "♨", tone: "warm", off: "heat_zad_seat_l_0" },
  { id: "heat_zad_seat_r", label: "Подогрев сзади справа", detail: "Заднее правое сиденье", icon: "♨", tone: "warm", off: "heat_zad_seat_r_off" },
  { id: "vent_zad_seat_l", label: "Вентиляция сзади слева", detail: "Заднее левое сиденье", icon: "❄", tone: "cool", off: "vent_zad_seat_l_0" },
  { id: "vent_zad_seat_r", label: "Вентиляция сзади справа", detail: "Заднее правое сиденье", icon: "❄", tone: "cool", off: "vent_zad_seat_r_off" }
];

const CAR_ACTIONS = [
  ["open_fuel_tank", "Открыть лючок зарядки"],
  ["open_trunk", "Открыть багажник"],
  ["close_trunk", "Закрыть багажник"],
  ["open_glove_box", "Открыть бардачок"],
  ["open_central_lock", "Открыть центральный замок"],
  ["close_central_lock", "Закрыть центральный замок"],
  ["open_windows_full", "Открыть все окна"],
  ["open_windows_50", "Открыть все окна на 50%"],
  ["open_windows_10", "Приоткрыть все окна"],
  ["close_windows", "Закрыть все окна"],
  ["open_window_front_left_10", "Приоткрыть окно водителя"],
  ["open_window_front_right_10", "Приоткрыть окно пассажира"],
  ["open_window_rear_left_10", "Приоткрыть заднее левое окно"],
  ["open_window_rear_right_10", "Приоткрыть заднее правое окно"],
  ["fold_mirrors", "Сложить зеркала"],
  ["unfold_mirrors", "Разложить зеркала"],
  ["close_all_doors", "Закрыть все двери"],
  ["open_door_front_left", "Открыть дверь водителя"],
  ["close_door_front_left", "Закрыть дверь водителя"],
  ["open_door_front_right", "Открыть дверь пассажира"],
  ["close_door_front_right", "Закрыть дверь пассажира"],
  ["open_door_rear_left", "Открыть заднюю левую дверь"],
  ["close_door_rear_left", "Закрыть заднюю левую дверь"],
  ["open_door_rear_right", "Открыть заднюю правую дверь"],
  ["close_door_rear_right", "Закрыть заднюю правую дверь"]
].map(([command, label]) => ({ type: "car", command, label, detail: `Exlantix · ${command}`, symbol: commandIcon(command) }));

const DEFAULT_SLOTS = [
  { type: "level", id: "heat_seat_l", level: 0 },
  { type: "level", id: "vent_seat_l", level: 0 },
  { type: "level", id: "heat_seat_r", level: 0 },
  { type: "action", command: "heat_wheel_on", label: "Подогрев руля" },
  { type: "car", command: "open_trunk", label: "Открыть багажник" },
  { type: "empty" }
];

const ACTION_LABELS = {
  heat_wheel_on: "Включить подогрев руля",
  heat_wheel_off: "Выключить подогрев руля",
  heat_windshield_on: "Включить обогрев лобового стекла",
  heat_windshield_off: "Выключить обогрев лобового стекла",
  heat_rearwindow_on: "Включить обогрев заднего стекла",
  heat_rearwindow_off: "Выключить обогрев заднего стекла",
  Recirculation_On: "Включить рециркуляцию",
  Recirculation_Off: "Выключить рециркуляцию",
  OPEN_SHTORKA: "Открыть шторку",
  CLOSE_SHTORKA: "Закрыть шторку",
  RUN_FUN_CAR: "Функции автомобиля",
  RUN_START_APP_MENU: "Все приложения",
  GLOBAL_HOME: "Домой",
  GLOBAL_BACK: "Назад",
  GO_TO_GU: "Показать на головном устройстве",
  GO_TO_PP: "Показать на приборной панели",
  VIEW_ALL_MESSAGE: "Сообщения с телефона",
  OPEN_TRUNK: "Открыть багажник",
  CLOSE_TRUNK: "Закрыть багажник",
  OPEN_FUEL_TANK: "Открыть лючок зарядки",
  OPEN_GLOVE_BOX: "Открыть бардачок",
  OPEN_CENTRAL_LOCK: "Открыть центральный замок",
  CLOSE_CENTRAL_LOCK: "Закрыть центральный замок"
};

const state = {
  slots: loadSlots(),
  actions: [],
  apps: [],
  pickerSlot: null,
  pickerTab: "recommended",
  query: "",
  toastTimer: null
};

const bridge = {
  available() { return !!(window.androidApi && typeof window.androidApi === "object"); },
  call(method, ...args) {
    if (!this.available() || typeof window.androidApi[method] !== "function") return null;
    try { return window.androidApi[method](...args); }
    catch (error) { console.error(`[Generic Exlantix] ${method}`, error); return null; }
  },
  runEnum(command) { return this.call("runEnum", TOKEN, command); },
  runApp(packageName) { return this.call("runApp", TOKEN, packageName); },
  carCommand(command) {
    const payload = JSON.stringify({ cmd: command });
    if (this.available() && typeof window.androidApi.carCommand === "function") return this.call("carCommand", TOKEN, payload);
    if (this.available() && typeof window.androidApi.carCmd === "function") return this.call("carCmd", TOKEN, payload);
    return null;
  },
  getRunEnum() { return parseJson(this.call("getRunEnum", TOKEN), []); },
  getRunEnumPic(command) {
    const value = this.call("getRunEnumPic", TOKEN, command) || "";
    return typeof value === "string" && !value.trim().startsWith("{") ? value : "";
  },
  getUserApps() { return parseJson(this.call("getUserApps", TOKEN), []); },
  getCarData(key) { return parseJson(this.call("getCarData", TOKEN, key), null); }
};

function parseJson(value, fallback) {
  if (value == null) return fallback;
  if (typeof value !== "string") return value;
  try { return JSON.parse(value); } catch { return fallback; }
}

function loadSlots() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (Array.isArray(saved)) return Array.from({ length: SLOT_COUNT }, (_, index) => saved[index] || { type: "empty" });
  } catch (error) { console.warn("Не удалось прочитать слоты", error); }
  return Array.from({ length: SLOT_COUNT }, (_, index) => DEFAULT_SLOTS[index] ? { ...DEFAULT_SLOTS[index] } : { type: "empty" });
}

function saveSlots() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.slots));
}

function normalizeActionList(raw) {
  const values = Array.isArray(raw) ? raw : [];
  const commands = [];
  values.forEach(item => {
    const command = typeof item === "string"
      ? item
      : item?.RunEnum || item?.runEnum || item?.name || item?.cmd || item?.command;
    if (!command) return;
    const label = typeof item === "object" && item
      ? item.RunEnumText || item.runEnumText || item.label || item.title
      : "";
    if (label) ACTION_LABELS[command] = String(label);
    commands.push(String(command));
  });
  return [...new Set(commands)];
}

function actionLabel(command) {
  if (ACTION_LABELS[command]) return ACTION_LABELS[command];
  return command
    .replace(/_on$/i, "")
    .replace(/_off$/i, "")
    .replace(/_\d+$/i, "")
    .replaceAll("_", " ")
    .toLowerCase()
    .replace(/^./, letter => letter.toUpperCase());
}

function levelGroup(id) {
  return LEVEL_GROUPS.find(group => group.id === id);
}

function hasLevelGroup(group, available) {
  const levels = [group.off, `${group.id}_1`, `${group.id}_2`, `${group.id}_3`];
  return levels.some(command => available.includes(command));
}

function commandIcon(command) {
  if (/heat|defrost|windshield/i.test(command)) return "♨";
  if (/vent|recirculation/i.test(command)) return "❄";
  if (/trunk|fuel|glove|door|lock/i.test(command)) return "⌁";
  if (/home/i.test(command)) return "⌂";
  if (/back/i.test(command)) return "←";
  if (/app|menu/i.test(command)) return "▦";
  if (/message/i.test(command)) return "◫";
  return "↗";
}

function renderSlots() {
  const container = document.getElementById("action-slots");
  container.innerHTML = "";
  state.slots.forEach((slot, index) => container.appendChild(renderSlot(slot, index)));
}

function renderSlot(slot, index) {
  const element = document.createElement("div");
  element.className = "action-slot";
  element.dataset.slot = String(index);
  element.tabIndex = 0;
  element.setAttribute("role", "button");

  if (!slot || slot.type === "empty") {
    element.classList.add("empty-slot");
    element.innerHTML = `
      <div class="action-icon">+</div>
      <div class="action-main"><strong>Добавить</strong><span>Удерживайте для выбора</span></div>`;
    bindSlotPress(element, index, () => openPicker(index));
    return element;
  }

  if (slot.type === "level") {
    const group = levelGroup(slot.id);
    if (!group) return renderSlot({ type: "empty" }, index);
    element.classList.add("has-level", group.tone === "cool" ? "cool" : "warm");
    element.innerHTML = `
      <div class="action-icon">${group.icon}</div>
      <div class="action-main"><strong>${group.label}</strong><span>${Number(slot.level) ? `Уровень ${Number(slot.level)}` : "Выключено"}</span></div>
      <div class="level-lamps" aria-label="Уровень ${Number(slot.level) || 0}">
        ${[1, 2, 3].map(level => `<i class="${Number(slot.level) >= level ? "on" : ""}"></i>`).join("")}
      </div>`;
    bindSlotPress(element, index, () => cycleLevel(index));
    return element;
  }

  const isApp = slot.type === "app";
  const isCar = slot.type === "car";
  const label = slot.label || (isApp ? slot.packageName : actionLabel(slot.command));
  const iconContent = slot.icon
    ? `<img src="data:image/png;base64,${slot.icon}" alt="">`
    : (isApp ? (label.trim().charAt(0).toUpperCase() || "A") : commandIcon(slot.command));
  element.innerHTML = `
    <div class="action-icon">${iconContent}</div>
    <div class="action-main"><strong>${escapeHtml(label)}</strong><span>${isApp ? "Приложение" : isCar ? "Автомобиль" : "Действие"}</span></div>
    <div class="single-lamp" aria-hidden="true"></div>`;
  bindSlotPress(element, index, () => executeSlot(index));
  return element;
}

function bindSlotPress(element, index, clickAction) {
  let timer = null;
  let longPressed = false;
  const start = event => {
    if (event.type === "pointerdown" && event.button !== 0) return;
    longPressed = false;
    clearTimeout(timer);
    timer = setTimeout(() => {
      longPressed = true;
      openPicker(index);
    }, 650);
  };
  const finish = event => {
    clearTimeout(timer);
    if (event.type === "pointerup" && !longPressed && clickAction && !event.target.closest(".level-control")) clickAction();
  };
  element.addEventListener("pointerdown", start);
  element.addEventListener("pointerup", finish);
  element.addEventListener("pointercancel", () => clearTimeout(timer));
  element.addEventListener("pointerleave", () => clearTimeout(timer));
  element.addEventListener("contextmenu", event => event.preventDefault());
  element.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") { event.preventDefault(); clickAction ? clickAction() : openPicker(index); }
  });
}

function setLevel(index, level) {
  const slot = state.slots[index];
  const group = levelGroup(slot.id);
  if (!group) return;
  const command = level === 0 ? group.off : `${group.id}_${level}`;
  slot.level = level;
  saveSlots();
  renderSlots();
  runCommand(command, group.label, document.querySelector(`[data-slot="${index}"]`));
}

function cycleLevel(index) {
  const current = Number(state.slots[index]?.level) || 0;
  setLevel(index, (current + 1) % 4);
}

function executeSlot(index) {
  const slot = state.slots[index];
  const element = document.querySelector(`[data-slot="${index}"]`);
  if (slot.type === "app") {
    bridge.runApp(slot.packageName);
    pulse(element);
    showToast(`Открываю: ${slot.label || slot.packageName}`);
  } else if (slot.type === "car") {
    bridge.carCommand(slot.command);
    pulse(element);
    showToast(bridge.available() ? slot.label : `Демо: ${slot.label}`);
  } else if (slot.type === "action") {
    runCommand(slot.command, slot.label || actionLabel(slot.command), element);
  }
}

function runCommand(command, label, element) {
  bridge.runEnum(command);
  pulse(element);
  showToast(bridge.available() ? label : `Демо: ${label}`);
}

function pulse(element) {
  if (!element) return;
  element.classList.add("running");
  setTimeout(() => element.classList.remove("running"), 550);
}

function openPicker(index) {
  state.pickerSlot = index;
  state.query = "";
  document.getElementById("picker-search").value = "";
  document.getElementById("picker").hidden = false;
  renderPicker();
  setTimeout(() => document.getElementById("picker-search").focus(), 30);
}

function closePicker() {
  document.getElementById("picker").hidden = true;
  state.pickerSlot = null;
}

function pickerItems() {
  const available = state.actions.length ? state.actions : FALLBACK_ACTIONS;
  const groupedCommands = new Set();
  const levels = LEVEL_GROUPS
    .filter(group => hasLevelGroup(group, available))
    .map(group => {
      [group.off, `${group.id}_0`, `${group.id}_1`, `${group.id}_2`, `${group.id}_3`].forEach(command => groupedCommands.add(command));
      return { type: "level", id: group.id, label: group.label, detail: `${group.detail} · уровни 0–3`, symbol: group.icon };
    });
  const actions = available
    .map(command => ({ type: "action", command, label: actionLabel(command), detail: command, symbol: commandIcon(command) }));
  const apps = state.apps.map(app => ({
    type: "app",
    packageName: app.package || app.packageName || app.id,
    label: app.name || app.label || app.package || "Приложение",
    detail: app.package || app.packageName || "Приложение",
    icon: app.icon || "",
    symbol: "A"
  })).filter(app => app.packageName);

  if (state.pickerTab === "apps") return apps;
  if (state.pickerTab === "actions") return [...levels, ...CAR_ACTIONS, ...actions];

  const recommendedCommands = new Set([
    "heat_wheel_on", "heat_windshield_on", "heat_rearwindow_on", "Recirculation_On",
    "OPEN_SHTORKA", "CLOSE_SHTORKA", "RUN_FUN_CAR", "RUN_START_APP_MENU",
    "OPEN_TRUNK", "OPEN_FUEL_TANK", "OPEN_GLOVE_BOX", "CLOSE_CENTRAL_LOCK"
  ]);
  return [
    ...levels,
    ...CAR_ACTIONS.slice(0, 10),
    ...actions.filter(item => !groupedCommands.has(item.command) && recommendedCommands.has(item.command)).slice(0, 12),
    ...apps.slice(0, 6)
  ];
}

function renderPicker() {
  const query = state.query.trim().toLocaleLowerCase("ru");
  const items = pickerItems().filter(item => !query || `${item.label} ${item.detail}`.toLocaleLowerCase("ru").includes(query));
  const grid = document.getElementById("picker-grid");
  grid.innerHTML = "";
  if (!items.length) {
    grid.innerHTML = `<div class="picker-empty">${state.pickerTab === "apps" && !bridge.available() ? "Приложения появятся при запуске экрана в JCarTools" : "Ничего не найдено"}</div>`;
    return;
  }
  items.forEach(item => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "picker-item";
    const icon = item.icon ? `<img src="data:image/png;base64,${item.icon}" alt="">` : escapeHtml(item.symbol || "↗");
    button.innerHTML = `<span class="picker-item-icon">${icon}</span><span class="picker-item-copy"><strong>${escapeHtml(item.label)}</strong><span>${escapeHtml(item.detail)}</span></span>`;
    button.addEventListener("click", () => assignPickerItem(item));
    grid.appendChild(button);
  });
}

function assignPickerItem(item) {
  if (state.pickerSlot == null) return;
  if (item.type === "level") {
    state.slots[state.pickerSlot] = { type: "level", id: item.id, level: 0 };
  } else if (item.type === "app") {
    state.slots[state.pickerSlot] = { type: "app", packageName: item.packageName, label: item.label, icon: item.icon || "" };
  } else if (item.type === "car") {
    state.slots[state.pickerSlot] = { type: "car", command: item.command, label: item.label };
  } else {
    state.slots[state.pickerSlot] = { type: "action", command: item.command, label: item.label, icon: bridge.getRunEnumPic(item.command) };
  }
  saveSlots();
  renderSlots();
  closePicker();
  showToast("Слот обновлён");
}

function loadHostCapabilities() {
  state.actions = normalizeActionList(bridge.getRunEnum());
  const apps = bridge.getUserApps();
  state.apps = Array.isArray(apps) ? apps : [];
}

function syncVehicleData() {
  if (!bridge.available()) return;
  const vehicle = bridge.getCarData("vehicle") || bridge.getCarData("all") || {};
  const heat = bridge.getCarData("heat") || {};
  const ready = vehicle.ready ?? vehicle.engine ?? vehicle.vehicleReady;
  if (ready != null) document.getElementById("vehicle-status").textContent = ready ? "Готов к поездке" : "Автомобиль выключен";
  const temperature = vehicle.outTemp ?? vehicle.outsideTemperature ?? heat.outTemp;
  if (Number.isFinite(Number(temperature))) document.getElementById("outside-temperature").textContent = `${Number(temperature) > 0 ? "+" : ""}${Math.round(Number(temperature))}°`;
  const voltage = vehicle.batteryVoltage ?? vehicle.voltage;
  if (Number.isFinite(Number(voltage))) document.getElementById("battery-voltage").textContent = `${Number(voltage).toFixed(1)} V`;
}

function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent = now.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });
  document.getElementById("date").textContent = now.toLocaleDateString("ru-RU", { day: "numeric", month: "long" });
}

function applyAndSaveWallpaper(value) {
  document.body.style.backgroundImage = `url("${value}")`;
  try {
    localStorage.removeItem("generic_exlantix_wallpaper");
    localStorage.removeItem("generic_exlantix_wallpaper_at");
    localStorage.setItem("wallpaperMode", JSON.stringify("auto"));
    localStorage.setItem("wallpaperImage", JSON.stringify(value));
  } catch (storageError) {
    console.warn("Фон применён, но не сохранён", storageError);
  }
}

function preloadWallpaper(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(url);
    image.onerror = () => reject(new Error("Изображение не загрузилось"));
    image.src = url;
  });
}

async function setHeroWallpaper(force = false) {
  const currentCache = localStorage.getItem("generic_exlantix_wallpaper") || "";
  let legacyCache = "";
  try { legacyCache = JSON.parse(localStorage.getItem("wallpaperImage")) || ""; }
  catch { legacyCache = localStorage.getItem("wallpaperImage") || ""; }

  const cached = legacyCache || currentCache;
  if (cached) document.body.style.backgroundImage = `url("${cached}")`;
  if (!force && cached) return;

  const width = Math.max(1, window.innerWidth);
  const height = Math.max(1, window.innerHeight);
  const proxyUrl = `https://jcartools.ru/run/picsum_proxy.php?${width}/${height}`;
  let lastError = null;
  try {
    const response = await fetch(proxyUrl, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const type = response.headers.get("content-type") || "";
    if (!type.startsWith("image")) throw new Error("Ответ не является изображением");
    const blob = await response.blob();
    if (blob.size < 10_000) throw new Error("Изображение слишком маленькое");
    const dataUrl = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
    applyAndSaveWallpaper(dataUrl);
    if (force) showToast("Изображение обновлено");
    return;
  } catch (error) {
    lastError = error;
    console.warn("Прокси JCarTools недоступен", proxyUrl, error);
  }

  const directUrl = `https://picsum.photos/${width}/${height}?r=${Date.now()}`;
  try {
    await preloadWallpaper(directUrl);
    applyAndSaveWallpaper(directUrl);
    if (force) showToast("Изображение обновлено");
    return;
  } catch (error) {
    lastError = error;
    console.warn("Резервный источник недоступен", directUrl, error);
  }

  if (cached) {
    document.body.style.backgroundImage = `url("${cached}")`;
    if (force) showToast("Оставлено сохранённое изображение");
  } else {
    console.warn("Не удалось загрузить изображение", lastError);
    if (force) showToast("Сервис изображений временно недоступен");
  }
}

function applyMusicInfo(raw) {
  const data = parseJson(raw, raw) || {};
  document.getElementById("track-title").textContent = data.SongName || data.title || "Музыка не выбрана";
  document.getElementById("track-artist").textContent = data.SongArtist || data.artist || "JCarTools Media";
  const picture = data.SongAlbumPicture || data.albumArt;
  const art = document.getElementById("album-art");
  if (picture) {
    art.style.backgroundImage = `url("data:image/png;base64,${picture}")`;
    art.classList.add("has-image");
  }
}

window.onAndroidEvent = function onAndroidEvent(type, data) {
  if (type === "musicInfo") applyMusicInfo(data);
  if (["vehicle", "heat", "carData", "climateState"].includes(type)) syncVehicleData();
};

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(state.toastTimer);
  state.toastTimer = setTimeout(() => toast.classList.remove("visible"), 1900);
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
}

document.addEventListener("DOMContentLoaded", () => {
  updateClock();
  setHeroWallpaper();
  setInterval(updateClock, 30_000);
  loadHostCapabilities();
  renderSlots();
  syncVehicleData();
  if (bridge.available()) setInterval(syncVehicleData, 4_000);

  document.querySelectorAll("[data-media]").forEach(button => button.addEventListener("click", () => runCommand(button.dataset.media, "Команда плеера", button)));
  document.getElementById("settings-button").addEventListener("click", () => bridge.call("onSettings", TOKEN));
  document.getElementById("close-button").addEventListener("click", () => bridge.call("onClose", TOKEN));
  document.getElementById("wallpaper-button").addEventListener("click", () => setHeroWallpaper(true));
  document.getElementById("picker-close").addEventListener("click", closePicker);
  document.getElementById("picker").addEventListener("click", event => { if (event.target.id === "picker") closePicker(); });
  document.getElementById("picker-search").addEventListener("input", event => { state.query = event.target.value; renderPicker(); });
  document.querySelectorAll("[data-picker-tab]").forEach(button => button.addEventListener("click", () => {
    state.pickerTab = button.dataset.pickerTab;
    document.querySelectorAll("[data-picker-tab]").forEach(tab => tab.classList.toggle("active", tab === button));
    renderPicker();
  }));
  document.addEventListener("keydown", event => { if (event.key === "Escape") closePicker(); });
  document.addEventListener("contextmenu", event => event.preventDefault());

  bridge.call("onJsReady", TOKEN);
});
