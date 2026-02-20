/**
 * Calculator（迷你計算機）— 用 Stack 實作 Undo
 *
 * 這台計算機的核心就是一個 Stack！
 *
 * undoStack：記錄每一步操作（add 或 subtract）
 *
 * 運作邏輯：
 * - add / subtract → 改變 value，把操作 push 進 undoStack
 * - undo → 從 undoStack pop 出最後一步，還原上一步
 */

export function createCalculator() {
  let value = 0;
  const undoStack = [];

  return {
    add(n) {
      value += n;
      undoStack.push({
        operator: 'add',
        value: n
      });
    },

    subtract(n) {
      value -= n;
      undoStack.push({
        operator: 'subtract',
        value: n
      });
    },

    undo() {
      if(this.getUndoCount() === 0) return;
      let undoAction = undoStack.pop();
      switch(undoAction.operator){
        case 'add':
          value -= undoAction.value;
          break;
        case 'subtract':
          value += undoAction.value;
          break;
        default:
          break;
      }
    },

    getValue() {
      return value;
    },

    getUndoCount() {
      return undoStack.length;
    }
  }
}
