function Apple(weight) {
    this.weight = weight;
    this.decrease = function () {
        if (this.weight > 0) {
            this.weight--;
        }
    };
    this.isEmpty = true;
    this.getWeight = function () {
        return this.weight;
    };
}