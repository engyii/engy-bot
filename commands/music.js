const { SlashCommandBuilder } = require('discord.js')
const Fs = require('@supercharge/fs')
const _ = require('lodash')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('music')
		.setDescription('Replies with currently music playing!'),
	async execute(interaction) {
        const playqueue = await Fs.readJson('/host-home-folder/AppData/Local/Plexamp/Plexamp/PlayQueue.json')
        const qID = playqueue.data.MediaContainer.playQueueSelectedItemID
        const i =  _.find(playqueue.data.MediaContainer.Metadata, { playQueueItemID: qID })
		await interaction.reply(`${i.grandparentTitle} ${i.parentTitle} ${i.title}`)
	},
}