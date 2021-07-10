'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    let listCineplex = [];

    for (let index = 0; index < 100; index++) {
      const itemCineplex = {
        id: index + 1,
        name: `DDC${index + 1}`,
        logo: "bhg.jpg",
        createdAt: "2021-02-05 12:05:05",
        updatedAt: "2021-02-05 12:05:05"
      }
      listCineplex.push(itemCineplex)
    }

    await queryInterface.bulkInsert(
      'cineplexes',
      listCineplex
      , {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('cineplexes', null, {})
  }
};
