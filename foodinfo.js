const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  foodItemName: {
    type: String,
    required: true
  },
  foodGroup: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  nutritionalInformation: {
    calories: {
      type: Number,
      required: true
    },
    macronutrients: {
      proteins: {
        type: Number,
        required: true
      },
      fats: {
        saturated: {
          type: Number,
          required: true
        },
        unsaturated: {
          type: Number,
          required: true
        },
        trans: {
          type: Number,
          required: true
        }
      },
      carbohydrates: {
        type: Number,
        required: true
      },
      sugar: {
        type: Number,
        required: true
      }
    },
    micronutrients: {
      vitamins: {
        type: Object,
        required: true
      },
      minerals: {
        type: Object,
        required: true
      },
      otherNutrients: {
        type: Object,
        required: true
      }
    },
    fiber: {
      type: Number,
      required: true
    },
    sodium: {
      type: Number,
      required: true
    },
    cholesterol: {
      type: Number,
      required: true
    }
  },
  servingSize: {
    type: String,
    required: true
  },
  allergens: {
    type: [String],
    required: true
  },
  ingredients: {
    type: [String],
    required: true
  },
  preparationMethods: {
    type: [String],
    required: true
  },
  certifications: {
    type: [String],
    required: true
  },
  countryOfOrigin: {
    type: String,
    required: true
  },
  brandOrManufacturer: {
    type: String,
    required: true
  },
  dietaryRestrictions: {
    type: [String],
    required: true
  },
  healthBenefits: {
    type: [String],
    required: true
  },
  bestPractices: {
    type: String,
    required: true
  }
});

const FoodModel = mongoose.model('Food', foodSchema);

module.exports = FoodModel;
