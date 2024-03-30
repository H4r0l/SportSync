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
    time: {
        type: String,
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
    teams: {
        type: Number,
        required: true
    },
    players: {
        type: Number,
        required: true
    },  
})

export default mongoose.model('Tournament', TournamentSchema)