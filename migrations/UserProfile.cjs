'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('users',{
      id :{
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
      },
      firstName :{
        type : Sequelize.STRING,
        allowNull : true
      },
      middleName :{
        type : Sequelize.STRING,
        allowNull : true
      },
      lastName :{
        type : Sequelize.STRING,
        allowNull : true
      },
      email :{
        type : Sequelize.STRING,
        allowNull : false,
        unique : true
      },
      "createdAt" :{
        type : Sequelize.DATE,
        allowNull : true
      },
      "updatedAt" :{
        type : Sequelize.DATE,
        allowNull : true
      },
      "deletedAt" :{
        type : Sequelize.DATE,
        allowNull : true
      },
    },{schema:"public"})
  },

  async down (queryInterface, Sequelize) {
    
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
