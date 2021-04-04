(function unlock() {
    var u = $nuxt.$store.state.user;
    u.diagnosis = true, u.uid = "a";
})();
