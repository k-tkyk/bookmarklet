(function copy() {
    var c = "$children";
    var t = $nuxt[c][1][c][0][c][0][c][0][c][1];
    if (!t.isDiagnosis) {
        alert("診断が利用できません");
        return;
    }
    // indexを調整するため詳細と診断の開き直し
    t.isDetailOpen = true;
    t.isDiagnosisOpen = false;
    var result = "";
    $nuxt.$nextTick()
        .then(function(){
            t.isDiagnosisOpen = true;
            return $nuxt.$nextTick();
        })
        .then(function(){
            function partsName(e, c) {
                return e.find(p => p.part === c).partRecipe.key;
            }
            var e = t[c][6].gAllEquips, s = t[c][6].scores, d = t[c][6].diag;
            console.log(e, d, s);
            var r = [
                d["最高速度kmh"].toFixed(4),
                d["最高速到達時間"].toFixed(4),
                d["コーナー減速率"].toFixed(4),
                d["バッテリー消費量"].toFixed(3),
                d["ブレーキ性能"].toFixed(4),
                d["タイヤグリップ"].toFixed(4),
                d["ジャンプ飛距離"].toFixed(4),
                //d["バウンド時間"].toFixed(4),
                "", //現状誤差大きいのでコピーしない
                d["前後の重心"].toFixed(4),
                "", //ｵﾊﾞｽﾋﾟ目安
                d["芝最高速"].toFixed(4),
                d["ダート最高速"].toFixed(4),
                "", //デジタル耐久目安
                d["耐風最高速"].toFixed(4),
                d["耐水グリップ最高速"].toFixed(4),
                "", //雨ｵﾊﾞｽﾋﾟ目安
                //d[""].toFixed(4),
                s["スピード"].toFixed(4),
                s["パワー"].toFixed(4),
                s["コーナー安定"].toFixed(4),
                s["スタミナ耐久"].toFixed(4),
                s["重さ"].toFixed(4),
                s["ギヤ負荷"].toFixed(4),
                s["パワーロス"].toFixed(4),
                s["スピードロス"].toFixed(4),
                s["ウェーブ"].toFixed(4),
                s["オフロード"].toFixed(4),
                s["デジタル"].toFixed(4),
                s["耐風"].toFixed(4),
                s["耐水"].toFixed(4),
                s["エアロダウンフォース"].toFixed(4),
                "", //トレッド
                "", //ホイールベース
                "", //ローラーベース
                s["制振"].toFixed(4),
                s["スラスト角"].toFixed(4),
                s["タイヤ旋回"].toFixed(4),
                s["タイヤ反発"].toFixed(4),
                //s[""].toFixed(4),
                partsName(e, "ボディ"),
                partsName(e, "ボディ特性"),
                partsName(e, "ボディアシスト・１"),
                partsName(e, "ボディアシスト・２"),
                partsName(e, "モーター"),
                partsName(e, "ギヤ"),
                partsName(e, "シャーシ"),
                partsName(e, "フロント・ホイール"),
                partsName(e, "フロント・タイヤ"),
                partsName(e, "リヤ・ホイール"),
                partsName(e, "リヤ・タイヤ"),
            ];
            result = "=SPLIT(\"" + r.join(", ") + "\", \",\", FALSE)";
            return navigator.clipboard.writeText(result);
        })
        .then(function(){
            alert("コピー完了");
        })
        .catch(function(e){
            if (result) {
                prompt("以下の文字列をコピーしてください", result);
            } else {
                alert("データ抽出失敗:\n" + e);
            }
        });
})();
