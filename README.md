# 作業：迷你計算機 — 用 Stack 實作 Undo

## 作業目標

測試已經幫你寫好了！你的任務是**實作計算機的程式碼**，讓所有測試通過。

透過實作，你會動手寫出：
- 用 **陣列的 push / pop** 來記錄操作歷史
- **Undo（還原）** — 從 undoStack pop 出來，還原上一步（LIFO！）

---

## 知識點對照（簡報 → 實作）

| 簡報關卡 | 知識點 | 你要實作的部分 |
|----------|--------|----------------|
| Push（推入） | 每次操作都 push 進 undoStack | `add()` / `subtract()` 裡的 push |
| Pop（彈出） | undo 時從 undoStack pop 出來 | `undo()` 裡的 pop |
| LIFO 順序 | 最後做的操作最先被還原 | `undo()` 的反向執行邏輯 |

---

## 資料夾結構

```
stack-calculator/
├── README.md              ← 你正在看的這份文件
├── package.json
├── calculator.js          ← 📝 你要實作的程式碼（裡面有 TODO）
└── __tests__/
    └── calculator.test.js  ← ✅ 測試（已寫好，不用改）
```

> **注意**：`calculator.test.js` 已經寫好了，你**不需要修改**它。只需要填寫 `calculator.js` 裡面的 TODO。

---

## 快速開始

```bash
# 1. 進入作業資料夾
cd homework/stack-calculator

# 2. 安裝套件
npm install

# 3. 執行測試（一開始全部會失敗，因為 TODO 還沒實作）
npm test
```

一開始跑測試會看到一片紅色 ❌，這是正常的！每實作一個方法，就會有更多測試變綠 ✅。

---

## 怎麼實作？看 calculator.js 裡的提示

打開 `calculator.js`，每個 TODO 都有提示告訴你該怎麼寫。

### 範例：add 方法

```js
add(n) {
  // TODO: 請實作
},
```

註解裡告訴你要做兩件事：
1. 把 `value` 加上 `n`
2. 把操作記錄 push 進 `undoStack`（用 `{ type: 'add', value: n }`）

所以你要寫：

```js
add(n) {
  value += n
  undoStack.push({ type: 'add', value: n })
},
```

### 推薦實作順序

1. **先寫 `add` 和 `subtract`** — 最簡單，跑測試看前 5 題變綠
2. **再寫 `undo`** — 重點是「還原上一步」，全部 10 題變綠就完成了！

---

## 測試清單（10 題）

讓所有測試通過！

### 基本計算（5 題） → 實作 `add` + `subtract` 就能過

- [ ] 初始值是 0
- [ ] add(10) 後值是 10
- [ ] subtract(3) 後值正確
- [ ] 連續 add 累加
- [ ] 可以減到負數

### Undo 還原（5 題） → 實作 `undo` 就能過

- [ ] undo 還原上一步 add
- [ ] undo 還原上一步 subtract
- [ ] 連續 undo 依序還原（LIFO）
- [ ] 空的 undo 不報錯
- [ ] undo 後 undoCount 減少

---

## 評分標準

**全部 10 個測試通過 = 滿分！**

```bash
npm test
# 目標：10 個測試全綠 ✅
```
