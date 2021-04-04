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
    $nuxt.$nextTick()
        .then(function(){
            t.isDiagnosisOpen = true;
            return $nuxt.$nextTick();
        })
        .then(function(){
            var e = t[c][5].gAllEquips, s = t[c][5].scores, d = t[c][6].diag;
            console.log(e, d, s);
            var r = [
                d["最高速度kmh"].toFixed(3),
                d["最高速到達時間"].toFixed(3),
                d["コーナー減速率"].toFixed(3),
                d["バッテリー消費量"].toFixed(2),
                d["ブレーキ性能"].toFixed(3),
                d["タイヤグリップ"].toFixed(3),
                d["ジャンプ飛距離"].toFixed(3),
                //d[""].toFixed(3) + ", " +),
            ];
            navigator.clipboard.writeText(r.join(", "));
            return $nuxt.$nextTick();
        })
        .then(function(){
            alert("コピー完了");
        });
})();
