'use strict';

/**
 * Represents a group of cultures. 
 * 
 * @param {string} id The text-based unique ID of this culture group.
 */
function CultureGroup(id) {
  this.id = id;
  this.members = [];
}

/**
 * Add a culture to the group.
 * 
 * Note that if a culture with the same ID already exists, it will be overwritten.
 * 
 * @param {Culture} culture A culture object to be added.
 */
CultureGroup.prototype.add = function(culture) {
  // Culture must at least have an id in order to be added.
  if (!culture.hasOwnProperty(id)) {
    return;
  }

  this.members[culture.id] = culture;
}
