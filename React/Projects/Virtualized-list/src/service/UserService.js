import { faker } from "@faker-js/faker";

let seed = 1;

export const fetchUsers = (count = 30) => {
  return [...Array(count)].map(() => {
    return {
      id: seed++,
      name: faker.name.fullName(),
      email: faker.internet.email(),
    };
  });
};
