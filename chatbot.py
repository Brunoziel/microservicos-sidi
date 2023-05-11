from flask import Flask, render_template, request
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

app = Flask(__name__)

bot = ChatBot('MeuChatBot')
trainer = ChatterBotCorpusTrainer(bot)
trainer.train('chatterbot.corpus.portuguese')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get')
def get_bot_response():
    user_text = request.args.get('msg')
    bot_response = str(bot.get_response(user_text))
    return bot_response

if __name__ == '__main__':
    app.run()