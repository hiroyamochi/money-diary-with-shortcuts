function doGet(e) {
  var content = e.parameter.content;
  var amount = e.parameter.amount;
  var category = e.parameter.category;

  // スクリプトをくっつけたスプレッドシートを取得
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("data");

  // 現在の最終行を取得
  var lastRow = sheet.getLastRow();

  // データを追加する行を選択
  var newRow = lastRow + 1;

  // 今日の日付を取得
  var today = new Date();

  // データを書き込む
  sheet.getRange("A" + newRow).setValue(today);
  sheet.getRange("B" + newRow).setValue(category);
  sheet.getRange("C" + newRow).setValue(amount);
  sheet.getRange("D" + newRow).setValue(content);
}
