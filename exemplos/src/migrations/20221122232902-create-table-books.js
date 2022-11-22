'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'books',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        title: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        author: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        pageQuantity: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      }
      ) 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('books');
  }
};
