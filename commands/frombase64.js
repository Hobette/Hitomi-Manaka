module.exports = {
    name: 'frombase64',
    aliases: ['fromb64'],
    description: 'DEcodes from base 64',
    category: 'text',
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (!args[0]) return message.channel.send("TWkgcGVyc29uYWplIHNlIGxsYW1hIEphY29iIE1pbGxlciBoYSBuYWNpZG8gZWwgMyBkZSBhZ29zdG8gZGUgMTk4MSBsbyBxdWUgaW1wbGljYSBxdWUgYSBkw61hIGRlIGhveSB0aWVuZSAzNiBhw7FvcywgZXN0w6Egc29sdGVybyB5IGFob3JhIHZpdmUgdW5hIGh1bWlsZGUgdmlkYSBkZSBjYXJwaW50ZXJvLgpTZSBlc3BlY2lhbGl6YSBlbiBzaWxsYXMsIGFzaWVudG9zLCBidXRhY2FzLCBzaWxsb25lcywgYmFuY29zLCB0YWJ1cmV0ZXMsIGJhbnF1ZXRhcywgc2lsbGluZXMsIG1lY2Vkb3JhcywgZXNjYcOxb3MsIGphbXVnYXMsIHBvbHRyb25hcywgc8OzbGVvcywgcmVjbGluYXRvcmlvcywgdHJvbm9zLCBtZXNhcywgZXNjcml0b3Jpb3MsIHRhYmxlcm9zLCBtb3N0cmFkb3JlcywgYnVmZXRlcywgZXN0YW50ZXLDrWFzLCBhcm1hcmlvcywgdml0cmluYXMsIGFwYXJhZG9yZXMsIGJpYmxpb3RlY2FzLCBsaWJyZXLDrWFzLCBjw7Ntb2RhcywgdG9jYWRvcmVzLCBjaGlmb27DrWVzLCBjYWpvbmVyYXMsIGd1YXJkYXJyb3BhcywgY2FtYXMsIHRlY2hvcywgY2F0cmVzLCBsaXRlcmFzLCBoYW1hY2FzLi4u")
var text = Buffer(args.join(' '), 'base64').toString()
if (text.includes("�")) return message.channel.send("Malformed base 64.")
message.channel.send(text)
    },
}