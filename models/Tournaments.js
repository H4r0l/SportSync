import mongoose from 'mongoose'

const TournamentSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    sport: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    // Combine time into a single DateTime field
    dateTime: {
      type: Date,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    participants: {
      // Allow for different participant structures (teams or individual players)
      type: {
        type: String,
        enum: ['teams', 'players'], // Define allowed participant types
        required: true
      },
      count: {
        type: Number,
        required: true
      }
    },
    // Add flexibility for future fields (optional)
    additionalDetails: {
      type: Object
    }
  });
  

export default mongoose.model('Tournament', TournamentSchema)