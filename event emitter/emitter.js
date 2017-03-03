module.exports = function() {
    this.events = {};
    this.on = function(message, listener) {
        this.events[message] = this.events[message] || [];
        this.events[message].push(listener);
    };
    this.emit = function(message) {
        if(this.events[message]) {
            this.events[message].forEach(function(func){
                func();
            });
        }
    };
};

