class Pokemon {
    constructor(nombre, vidas, ataque) {
        this.nombre = nombre
        this.vidas = vidas 
        this.ataque = ataque 
        this.nivel = 1
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} y te estoy saludando`)
    }

}

export class Fuego extends Pokemon {
    constructor(nombre, vidas, ataque, ataqueLlamarada) {
        super(nombre, vidas, ataque)
        this.ataqueLlamarada = ataqueLlamarada
    }

    llamarada() {
        console.log(`El pokemon ${this.nombre} lanzo llamarada con daño de ${this.ataqueLlamarada}`)
    }
}

export class Electrico extends Pokemon {
    constructor(nombre, vidas, ataque, ataqueImpactrueno) {
        super(nombre, vidas, ataque)
        this.ataqueImpactrueno = ataqueImpactrueno
    }

    saludar() {
        console.log(`Hola, me estoy despidiendo`)
    }

    impactrueno() {
        console.log(`El pokemon ${this.nombre} lanzo impactrueno con daño de ${this.ataqueImpactrueno}`)
    }
}

//export {Fuego, Electrico}

//export default Pokemon