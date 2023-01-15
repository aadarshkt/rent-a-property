import house1 from './assets/house1.jpg'
import house3 from './assets/house3.jpg'
import house2 from './assets/house2.jpg'
import house4 from './assets/house4.jpg'
import house5 from './assets/house5.jpg'
import condo1 from './assets/condo1.jpg'
import condo2 from './assets/condo2.jpg'
import condo3 from './assets/condo3.jpg'
import condo4 from './assets/condo4.jpg'
import condo5 from './assets/condo5.jpg'
import apartment1 from './assets/apartment1.jpg'
import apartment2 from './assets/apartment2.jpg'
import apartment3 from './assets/apartment3.jpg'
import apartment4 from './assets/apartment4.jpg'
import apartment5 from './assets/apartment5.jpg'
import villa1 from './assets/villa1.jpg'
import villa2 from './assets/villa2.jpg'
import villa3 from './assets/villa3.jpg'
import villa4 from './assets/villa4.jpg'
import villa5 from './assets/villa5.jpg'
import townhouse from './assets/townhouse.jpg'
import townhouse1 from './assets/townhouse1.jpg'
import townhouse2 from './assets/townhouse2.jpg'



const set = new Set();
const generateRandomProperty = () => {
    let id;
    do{
        id = Math.floor(Math.random() * 100);
    }while(set.has(id));
    set.add(id);
    const houseImages = [house1, house2, house3, house4, house5];
    const condoImages = [condo1, condo2, condo3, condo4, condo5];
    const apartmentImages = [apartment1, apartment2, apartment3, apartment4, apartment5];
    const villaImages = [villa1, villa2, villa3, villa4, villa5];
    const townhouseImages = [townhouse, townhouse1, townhouse2];
    const location = `Location ${Math.floor(Math.random() * 100)}`;
    const max = 50000, min = 500;
    const price = Math.floor(min + (max - min + 1) * Math.random());
    const date = new Date(Date.now() - Math.floor(Math.random() * 100000));
    const propertyTypes = ["house", "condo", "apartment", "villa", "townhouse"];
    const propertyType = propertyTypes[Math.floor(Math.random() * (propertyTypes.length))];
    console.log(propertyType);
    let image = null, randomIndex = null;
    switch (propertyType) {
        case "house":
            randomIndex=Math.floor(Math.random() * houseImages.length)
            image=houseImages[randomIndex];
            break;
        case "condo":
            randomIndex=Math.floor(Math.random() * condoImages.length)
            image=condoImages[randomIndex];
            break;
        case "apartment":
            randomIndex=Math.floor(Math.random() * apartmentImages.length)
            image=apartmentImages[randomIndex];
            break;
        case "villa":
            randomIndex=Math.floor(Math.random() * villaImages.length)
            image=villaImages[randomIndex];
            break;
        case "townhouse":
            randomIndex=Math.floor(Math.random() * townhouseImages.length)
            image=townhouseImages[randomIndex];
            break;
        default:
            break;
    }
    return {id, location, price, date, propertyType, image};
}

const numberOfProperty = 50;
export const data = [];
for (let index = 0; index < numberOfProperty; index++) {
    const property = generateRandomProperty();
    data.push(property);
    console.log(property);
}

