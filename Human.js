function Human(name, gender, weight) {
    this.name = name;
    this.gender = true;
    this.weight = weight;
    this.getName = function () {
        return this.name;
    };
    this.setName = function (name) {
        this.name = name;
    };
    this.getWeight = function () {
        return this.weight;
    };
    this.setWeight = function (weight) {
        this.weight = weight
    };
    this.isMale = true;
    this.setGender = function (x) {
        return this.gender;
    };
    this.checkApple = function (Apple) {
        alert('Khối lượng táo là: ' + Apple.weight);
    };
    this.eat = function (Apple) {
        if (Apple.weight > 0) {
            Apple.decrease();
            this.weight++;
        } else {
            alert('Táo bị ăn hết');
        }
    };
    this.say = function () {
        alert('Xin chào! Tên tôi là ' + this.getName() + '. Tôi nặng ' + this.getWeight());
    }
}