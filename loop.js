function loop(times = 0, callback = null) {

    if (!callback) return false;

    while(times !== 0) {
        times--;
        callback();
    }
}