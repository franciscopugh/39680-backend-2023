import { faker } from '@faker-js/faker';
// import { faker } from '@faker-js/faker/locale/de';

const users = []

const createRandomUser = () => {
    return {
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        img: faker.image.food(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
    };
}

for (let i = 0; i < 100; i++) {
    users.push(createRandomUser());
}

console.log(users)