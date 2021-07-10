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
     * 
    */
    await queryInterface.bulkInsert(
      'cinemas',
      [
        {
          id: 1,
          name: "BHD 3/2",
          image: "bhg.jpg",
          address: "213 3/2 quan 10",
          cineplexId: 1,
          createdAt: "2021-02-05 12:05:05",
          updatedAt: "2021-02-05 12:05:05"
        },
        {
          id: 2,
          name: "BHD 3/2",
          image: "bhg.jpg",
          address: "213 3/2 quan 10",
          cineplexId: 2,
          createdAt: "2021-02-05 12:05:05",
          updatedAt: "2021-02-05 12:05:05"
        }
      ], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('cinemas', null, {})
  }
};
