class Country {
    constructor(podiumPlace, sportsDiscipline) {
        this.podiumPlace = podiumPlace;
        this.sportsDiscipline = sportsDiscipline;
        this.podiumPlaces = [];
        this.firstPlaces = [];
    }

    addPodiumPlace(podiumPlace, sportsDiscipline) {
        this.podiumPlaces.push([podiumPlace, sportsDiscipline]);
    }

    showPodiumPlaces() {
        console.log(`Those are our podium places: `);
        console.log(this.podiumPlaces.sort());
        return this.podiumPlaces;
    }

    seekForFirstPodiumPlace() {
        this.firstPlaces = this.podiumPlaces.filter(place => place.includes(1));
        return this.firstPlaces;
    }

    showFirstPlaces() {
        return console.log(this.firstPlaces);
    }

    countFirstPlaces() {
        return console.log(`We have ${this.firstPlaces.length} first places.`);
    }
}

const polska = new Country(1, 'Handball');

polska.addPodiumPlace(1, 'Football');
polska.addPodiumPlace(3, 'Football');
polska.addPodiumPlace(1, 'Tenis');
polska.addPodiumPlace(3, 'Football');
polska.addPodiumPlace(1, 'Basketball');
polska.seekForFirstPodiumPlace();
polska.showPodiumPlaces();
polska.countFirstPlaces();
polska.showFirstPlaces();


console.log('\n');

const niemcy = new Country(2, 'Handball');
niemcy.addPodiumPlace(2, 'Football');
niemcy.addPodiumPlace(1, 'Football');
niemcy.addPodiumPlace(3, 'Tenis');
niemcy.addPodiumPlace(1, 'Football');
niemcy.addPodiumPlace(3, 'Basketball');
niemcy.seekForFirstPodiumPlace();
niemcy.showPodiumPlaces();
niemcy.countFirstPlaces();
niemcy.showFirstPlaces();
