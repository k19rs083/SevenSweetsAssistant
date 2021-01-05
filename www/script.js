// NCMB アクセスの準備
var ncmb = new NCMB(appKey, clientKey);
// 利用するデータベースを指定（存在しなければ生成）
var TestClass = ncmb.DataStore(DSName);
