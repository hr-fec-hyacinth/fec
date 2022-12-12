import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import api from './../../../server/api.js'
import QnA from './QnA.jsx';
import QnAList from './QnAList.jsx'
import Modal from './Modal.jsx'
import AList from './AList.jsx'
import OneA from './OneA.jsx'
import OneQ from './OneQ.jsx'
import QForm from './QForm.jsx'
import AForm from './AForm.jsx'

jest.mock('./../../../server/api.js')

let product = {
  "id": 37314,
  "campus": "hr-rfe",
  "name": "Slacker's Slacks",
  "slogan": "Comfortable for everything, or nothing",
  "description": "I'll tell you how great they are after I nap for a bit.",
  "category": "Pants",
  "default_price": "65.00",
  "created_at": "2021-08-13T14:37:33.145Z",
  "updated_at": "2021-08-13T14:37:33.145Z"
}

let search = '';

let questions = {
  "product_id": "37314",
  "results": [
    {
      "question_id": 642509,
      "question_body": "Is the item durable?\n",
      "question_date": "2022-07-22T00:00:00.000Z",
      "asker_name": "tom",
      "question_helpfulness": 25,
      "reported": false,
      "answers": {
        "5989556": {
          "id": 5989556,
          "body": "Liar!",
          "date": "2022-12-08T00:00:00.000Z",
          "answerer_name": "ANAKIN",
          "helpfulness": 3,
          "photos": []
        },
        "5989558": {
          "id": 5989558,
          "body": "Let her go, Anakin.",
          "date": "2022-12-08T00:00:00.000Z",
          "answerer_name": "Obi-Wan",
          "helpfulness": 2,
          "photos": []
        },
        "5989559": {
          "id": 5989559,
          "body": "You turned her against me.",
          "date": "2022-12-08T00:00:00.000Z",
          "answerer_name": "Anakin",
          "helpfulness": 2,
          "photos": []
        },
        "5989560": {
          "id": 5989560,
          "body": "You have done that yourself.",
          "date": "2022-12-08T00:00:00.000Z",
          "answerer_name": "Obi-Wan",
          "helpfulness": 2,
          "photos": []
        },
        "5989561": {
          "id": 5989561,
          "body": "You will not take her from me.",
          "date": "2022-12-08T00:00:00.000Z",
          "answerer_name": "Anakin",
          "helpfulness": 2,
          "photos": []
        },
        "5989562": {
          "id": 5989562,
          "body": "Your anger and your lust for power have already done that.",
          "date": "2022-12-08T00:00:00.000Z",
          "answerer_name": "Obi-Wan",
          "helpfulness": 2,
          "photos": []
        },
        "5989563": {
          "id": 5989563,
          "body": "You have allowed this Dark Lord to twist your mind until now . . . until now you have become the very thing you swore to destroy.",
          "date": "2022-12-08T00:00:00.000Z",
          "answerer_name": "Obi-wan",
          "helpfulness": 2,
          "photos": []
        },
        "5989564": {
          "id": 5989564,
          "body": "Don't lecture me, Obi-Wan. I see through the lies of the Jedi. I do not fear the dark side as you do. I have brought peace, justice, freedom, and security to my new Empire.",
          "date": "2022-12-08T00:00:00.000Z",
          "answerer_name": "Anakin",
          "helpfulness": 2,
          "photos": []
        },
        "5989565": {
          "id": 5989565,
          "body": "Your new Empire?",
          "date": "2022-12-08T00:00:00.000Z",
          "answerer_name": "Obi-Wan",
          "helpfulness": 2,
          "photos": []
        },
        "5989580": {
          "id": 5989580,
          "body": "I do not think this item is very durable. It needs work.",
          "date": "2022-12-08T00:00:00.000Z",
          "answerer_name": "nickname123",
          "helpfulness": 2,
          "photos": [
            "http://res.cloudinary.com/dqmnjwd2c/image/upload/v1666378642/slackerslacks_pkkezc.webp"
          ]
        },
        "5989584": {
          "id": 5989584,
          "body": "https://prod.liveshare.vsengsaas.visualstudio.com/join?D2128D9E54E54E216F7CC432A12A9E283575",
          "date": "2022-12-08T00:00:00.000Z",
          "answerer_name": "jd",
          "helpfulness": 25,
          "photos": [
            "http://res.cloudinary.com/dqaynsuqp/image/upload/v1670534895/ekuvx2gwxxpth3vmn64d.jpg",
            "http://res.cloudinary.com/dqaynsuqp/image/upload/v1670534896/edm2prdszto7wglhauwt.jpg"
          ]
        },
        "5989592": {
          "id": 5989592,
          "body": "I am a seller and I am answering a question!",
          "date": "2022-12-08T00:00:00.000Z",
          "answerer_name": "seller",
          "helpfulness": 1,
          "photos": []
        },
        "5989640": {
          "id": 5989640,
          "body": "I don't have this product but this is a cute duck!",
          "date": "2022-12-10T00:00:00.000Z",
          "answerer_name": "duckman",
          "helpfulness": 0,
          "photos": [
            "http://res.cloudinary.com/dq6rqplja/image/upload/v1670641779/vh83crtch5vol2ri1ktt.jpg"
          ]
        }
      }
    },
    {
      "question_id": 644323,
      "question_body": "Slacker's Slacks does this have white color as well?",
      "question_date": "2022-12-08T00:00:00.000Z",
      "asker_name": "jackson11!",
      "question_helpfulness": 12,
      "reported": false,
      "answers": {
        "5989567": {
          "id": 5989567,
          "body": "Anakin, my allegiance is to the Republic... to democracy.",
          "date": "2022-12-08T00:00:00.000Z",
          "answerer_name": "Obi-Wan",
          "helpfulness": 0,
          "photos": []
        },
        "5989568": {
          "id": 5989568,
          "body": "If you're not with me, you're my enemy.",
          "date": "2022-12-08T00:00:00.000Z",
          "answerer_name": "Anakin",
          "helpfulness": 0,
          "photos": []
        },
        "5989569": {
          "id": 5989569,
          "body": "Only a Sith Lord deals in absolutes. I will do what I must.",
          "date": "2022-12-08T00:00:00.000Z",
          "answerer_name": "Obi-wan",
          "helpfulness": 0,
          "photos": []
        },
        "5989570": {
          "id": 5989570,
          "body": "You will try.",
          "date": "2022-12-08T00:00:00.000Z",
          "answerer_name": "Anakin",
          "helpfulness": 0,
          "photos": []
        },
        "5989617": {
          "id": 5989617,
          "body": "only if photos work",
          "date": "2022-12-09T00:00:00.000Z",
          "answerer_name": "pixter",
          "helpfulness": 0,
          "photos": []
        },
        "5989618": {
          "id": 5989618,
          "body": "only if photos work",
          "date": "2022-12-09T00:00:00.000Z",
          "answerer_name": "pixter",
          "helpfulness": 0,
          "photos": [
            "http://res.cloudinary.com/dvzmvxypr/image/upload/v1670619067/ohgn9nvymzhn3od2zizu.webp"
          ]
        }
      }
    },
    {
      "question_id": 642488,
      "question_body": "Is there a kid's size available?",
      "question_date": "2022-07-22T00:00:00.000Z",
      "asker_name": "kid",
      "question_helpfulness": 9,
      "reported": false,
      "answers": {}
    }
  ]
}

let longQuestions = {
  "product_id": "37314",
  "results": [
    {
      "question_id": 642509,
      "question_body": "Is the item durable?\n",
      "question_date": "2022-07-22T00:00:00.000Z",
      "asker_name": "tom",
      "question_helpfulness": 27,
      "reported": false,
      "answers": {
        "5989556": {
          "id": 5989556,
          "body": "Liar!",
          "date": "2022-12-08T00:00:00.000Z",
          "answerer_name": "ANAKIN",
          "helpfulness": 4,
          "photos": []
        },
        "5989558": {
          "id": 5989558,
          "body": "Let her go, Anakin.",
          "date": "2022-12-08T00:00:00.000Z",
          "answerer_name": "Obi-Wan",
          "helpfulness": 5,
          "photos": []
        },
        "5989560": {
          "id": 5989560,
          "body": "You have done that yourself.",
          "date": "2022-12-08T00:00:00.000Z",
          "answerer_name": "Obi-Wan",
          "helpfulness": 2,
          "photos": []
        },
        "5989561": {
          "id": 5989561,
          "body": "You will not take her from me.",
          "date": "2022-12-08T00:00:00.000Z",
          "answerer_name": "Anakin",
          "helpfulness": 2,
          "photos": []
        },
        "5989562": {
          "id": 5989562,
          "body": "Your anger and your lust for power have already done that.",
          "date": "2022-12-08T00:00:00.000Z",
          "answerer_name": "Obi-Wan",
          "helpfulness": 2,
          "photos": []
        },
        "5989563": {
          "id": 5989563,
          "body": "You have allowed this Dark Lord to twist your mind until now . . . until now you have become the very thing you swore to destroy.",
          "date": "2022-12-08T00:00:00.000Z",
          "answerer_name": "Obi-wan",
          "helpfulness": 2,
          "photos": []
        },
        "5989564": {
          "id": 5989564,
          "body": "Don't lecture me, Obi-Wan. I see through the lies of the Jedi. I do not fear the dark side as you do. I have brought peace, justice, freedom, and security to my new Empire.",
          "date": "2022-12-08T00:00:00.000Z",
          "answerer_name": "Anakin",
          "helpfulness": 2,
          "photos": []
        },
        "5989565": {
          "id": 5989565,
          "body": "Your new Empire?",
          "date": "2022-12-08T00:00:00.000Z",
          "answerer_name": "Obi-Wan",
          "helpfulness": 2,
          "photos": []
        },
        "5989580": {
          "id": 5989580,
          "body": "I do not think this item is very durable. It needs work.",
          "date": "2022-12-08T00:00:00.000Z",
          "answerer_name": "nickname123",
          "helpfulness": 2,
          "photos": [
            "http://res.cloudinary.com/dqmnjwd2c/image/upload/v1666378642/slackerslacks_pkkezc.webp"
          ]
        },
        "5989584": {
          "id": 5989584,
          "body": "https://prod.liveshare.vsengsaas.visualstudio.com/join?D2128D9E54E54E216F7CC432A12A9E283575",
          "date": "2022-12-08T00:00:00.000Z",
          "answerer_name": "jd",
          "helpfulness": 25,
          "photos": [
            "http://res.cloudinary.com/dqaynsuqp/image/upload/v1670534895/ekuvx2gwxxpth3vmn64d.jpg",
            "http://res.cloudinary.com/dqaynsuqp/image/upload/v1670534896/edm2prdszto7wglhauwt.jpg"
          ]
        },
        "5989592": {
          "id": 5989592,
          "body": "I am a seller and I am answering a question!",
          "date": "2022-12-08T00:00:00.000Z",
          "answerer_name": "seller",
          "helpfulness": 1,
          "photos": []
        },
        "5989640": {
          "id": 5989640,
          "body": "I don't have this product but this is a cute duck!",
          "date": "2022-12-10T00:00:00.000Z",
          "answerer_name": "duckman",
          "helpfulness": 0,
          "photos": [
            "http://res.cloudinary.com/dq6rqplja/image/upload/v1670641779/vh83crtch5vol2ri1ktt.jpg"
          ]
        }
      }
    },
    {
      "question_id": 644323,
      "question_body": "Slacker's Slacks does this have white color as well?",
      "question_date": "2022-12-08T00:00:00.000Z",
      "asker_name": "jackson11!",
      "question_helpfulness": 13,
      "reported": false,
      "answers": {
        "5989567": {
          "id": 5989567,
          "body": "Anakin, my allegiance is to the Republic... to democracy.",
          "date": "2022-12-08T00:00:00.000Z",
          "answerer_name": "Obi-Wan",
          "helpfulness": 0,
          "photos": []
        },
        "5989568": {
          "id": 5989568,
          "body": "If you're not with me, you're my enemy.",
          "date": "2022-12-08T00:00:00.000Z",
          "answerer_name": "Anakin",
          "helpfulness": 0,
          "photos": []
        },
        "5989569": {
          "id": 5989569,
          "body": "Only a Sith Lord deals in absolutes. I will do what I must.",
          "date": "2022-12-08T00:00:00.000Z",
          "answerer_name": "Obi-wan",
          "helpfulness": 0,
          "photos": []
        },
        "5989570": {
          "id": 5989570,
          "body": "You will try.",
          "date": "2022-12-08T00:00:00.000Z",
          "answerer_name": "Anakin",
          "helpfulness": 0,
          "photos": []
        },
        "5989617": {
          "id": 5989617,
          "body": "only if photos work",
          "date": "2022-12-09T00:00:00.000Z",
          "answerer_name": "pixter",
          "helpfulness": 0,
          "photos": []
        },
        "5989618": {
          "id": 5989618,
          "body": "only if photos work",
          "date": "2022-12-09T00:00:00.000Z",
          "answerer_name": "pixter",
          "helpfulness": 0,
          "photos": [
            "http://res.cloudinary.com/dvzmvxypr/image/upload/v1670619067/ohgn9nvymzhn3od2zizu.webp"
          ]
        }
      }
    },
    {
      "question_id": 642488,
      "question_body": "Is there a kid's size available?",
      "question_date": "2022-07-22T00:00:00.000Z",
      "asker_name": "kid",
      "question_helpfulness": 9,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 642471,
      "question_body": "Are they dressy enough for a late afternoon wedding / evening reception?",
      "question_date": "2022-07-22T00:00:00.000Z",
      "asker_name": "test",
      "question_helpfulness": 4,
      "reported": false,
      "answers": {
        "5987029": {
          "id": 5987029,
          "body": "I purchased these pants to wear on Christmas Eve w a dressy top, & silver heels, and wore them again to a nice brunch w a nice dressy sweater.\nMy answer is yes.",
          "date": "2022-07-22T00:00:00.000Z",
          "answerer_name": "hannah",
          "helpfulness": 2,
          "photos": []
        },
        "5987030": {
          "id": 5987030,
          "body": "Depends on the blouse or jacket you use. I have used them for dressy occasions and for dress casual occasions. I think they are very versatile.",
          "date": "2022-07-22T00:00:00.000Z",
          "answerer_name": "jack",
          "helpfulness": 3,
          "photos": []
        },
        "5987031": {
          "id": 5987031,
          "body": "Yes they and very comfortable",
          "date": "2022-07-22T00:00:00.000Z",
          "answerer_name": "ally",
          "helpfulness": 0,
          "photos": []
        },
        "5987032": {
          "id": 5987032,
          "body": "Yes. Be sure they are pressed.\n",
          "date": "2022-07-22T00:00:00.000Z",
          "answerer_name": "test",
          "helpfulness": 0,
          "photos": []
        }
      }
    },
    {
      "question_id": 643550,
      "question_body": "Close it ",
      "question_date": "2022-10-21T00:00:00.000Z",
      "asker_name": "dsfsa",
      "question_helpfulness": 2,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643549,
      "question_body": "dsafdsafdsfa",
      "question_date": "2022-10-21T00:00:00.000Z",
      "asker_name": "asdas",
      "question_helpfulness": 2,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643548,
      "question_body": "nope not here?",
      "question_date": "2022-10-21T00:00:00.000Z",
      "asker_name": "askdfj",
      "question_helpfulness": 2,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643547,
      "question_body": "Maybe now",
      "question_date": "2022-10-21T00:00:00.000Z",
      "asker_name": "maybe45",
      "question_helpfulness": 2,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 642508,
      "question_body": "Can I exchange sizes?",
      "question_date": "2022-07-22T00:00:00.000Z",
      "asker_name": "ally",
      "question_helpfulness": 2,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 642484,
      "question_body": "What is the material composition? What is the percent cotton and other materials?",
      "question_date": "2022-07-22T00:00:00.000Z",
      "asker_name": "test",
      "question_helpfulness": 2,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 644364,
      "question_body": "what does cozy mean",
      "question_date": "2022-12-08T00:00:00.000Z",
      "asker_name": "pixter",
      "question_helpfulness": 1,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 644340,
      "question_body": "but is it cozier than me",
      "question_date": "2022-12-08T00:00:00.000Z",
      "asker_name": "nik",
      "question_helpfulness": 1,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 644336,
      "question_body": "rrrrrrrrrrrr",
      "question_date": "2022-12-08T00:00:00.000Z",
      "asker_name": "rrrrrrr",
      "question_helpfulness": 1,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643552,
      "question_body": "dfgsdgsfdfgdgfs",
      "question_date": "2022-10-21T00:00:00.000Z",
      "asker_name": "dfgs",
      "question_helpfulness": 1,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643551,
      "question_body": "billy billy billy billy billy ",
      "question_date": "2022-10-21T00:00:00.000Z",
      "asker_name": "billy ",
      "question_helpfulness": 1,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643541,
      "question_body": "Close my modal pleasee?",
      "question_date": "2022-10-21T00:00:00.000Z",
      "asker_name": "probablyNot",
      "question_helpfulness": 1,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643530,
      "question_body": "Another question?",
      "question_date": "2022-10-20T00:00:00.000Z",
      "asker_name": "YepForSure",
      "question_helpfulness": 1,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643477,
      "question_body": "If it's camouflage why can I see it",
      "question_date": "2022-10-19T00:00:00.000Z",
      "asker_name": "LogicBrain66",
      "question_helpfulness": 1,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 644361,
      "question_body": "",
      "question_date": "2022-12-08T00:00:00.000Z",
      "asker_name": "",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 644357,
      "question_body": "This is a question?",
      "question_date": "2022-12-08T00:00:00.000Z",
      "asker_name": "testing",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 644353,
      "question_body": "Because of Obi-Wan?",
      "question_date": "2022-12-08T00:00:00.000Z",
      "asker_name": "Anakin",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 644351,
      "question_body": "I don't know you anymore. Anakin, you're breaking my heart. I'll never stop loving you, but you are going down a path I can't follow.\n",
      "question_date": "2022-12-08T00:00:00.000Z",
      "asker_name": "Padme",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 644339,
      "question_body": "How cozy is it",
      "question_date": "2022-12-08T00:00:00.000Z",
      "asker_name": "pixter",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 644338,
      "question_body": "fgbfgb",
      "question_date": "2022-12-08T00:00:00.000Z",
      "asker_name": "fgbfgb",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 644337,
      "question_body": "9129219021921902109292190219021902192190219029012910",
      "question_date": "2022-12-08T00:00:00.000Z",
      "asker_name": "122121",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 644335,
      "question_body": "dfvdffffffffffffffffffffffff",
      "question_date": "2022-12-08T00:00:00.000Z",
      "asker_name": "ffdddddddddd",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 644334,
      "question_body": "bodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybody",
      "question_date": "2022-12-08T00:00:00.000Z",
      "asker_name": "namenamenamename",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 644322,
      "question_body": "132321231231321123231213231231231231",
      "question_date": "2022-12-08T00:00:00.000Z",
      "asker_name": "321321",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 644321,
      "question_body": "1290092130921309231093210921309329103290193021902319021390231902310923112",
      "question_date": "2022-12-08T00:00:00.000Z",
      "asker_name": "jackson11!",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643700,
      "question_body": "can I post from postmann",
      "question_date": "2022-10-24T00:00:00.000Z",
      "asker_name": "mysteryTester",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643676,
      "question_body": "Can I Feed Questions to Make look better?",
      "question_date": "2022-10-23T00:00:00.000Z",
      "asker_name": "QuestionAdder",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643590,
      "question_body": "can I post from postmann",
      "question_date": "2022-10-21T00:00:00.000Z",
      "asker_name": "mysteryTester",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643584,
      "question_body": "The questions is?",
      "question_date": "2022-10-21T00:00:00.000Z",
      "asker_name": "WickedCool2",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643583,
      "question_body": "This is my question",
      "question_date": "2022-10-21T00:00:00.000Z",
      "asker_name": "questionMan",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643568,
      "question_body": "Unauth",
      "question_date": "2022-10-21T00:00:00.000Z",
      "asker_name": "unauth23",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643566,
      "question_body": "fdfsaf",
      "question_date": "2022-10-21T00:00:00.000Z",
      "asker_name": "dsfsad",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643564,
      "question_body": "Does something",
      "question_date": "2022-10-21T00:00:00.000Z",
      "asker_name": "things",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643561,
      "question_body": "Where do the hotdogs go?",
      "question_date": "2022-10-21T00:00:00.000Z",
      "asker_name": "gangstaPlaya22",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643560,
      "question_body": "Another one",
      "question_date": "2022-10-21T00:00:00.000Z",
      "asker_name": "Anotherone56",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643558,
      "question_body": "dsfdsad",
      "question_date": "2022-10-21T00:00:00.000Z",
      "asker_name": "dsfasd",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643556,
      "question_body": "How many questions have I added?",
      "question_date": "2022-10-21T00:00:00.000Z",
      "asker_name": "whoKnows455",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643555,
      "question_body": "dumb question",
      "question_date": "2022-10-21T00:00:00.000Z",
      "asker_name": "modalman233",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643554,
      "question_body": "dsfasdf",
      "question_date": "2022-10-21T00:00:00.000Z",
      "asker_name": "dsfasdfa",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643545,
      "question_body": "this is it this is the one",
      "question_date": "2022-10-21T00:00:00.000Z",
      "asker_name": "thisone84",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643544,
      "question_body": "dumbo dumbo dumbo dumbo dumbo dumbo dumbo ",
      "question_date": "2022-10-21T00:00:00.000Z",
      "asker_name": "dumbo867",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643543,
      "question_body": "dumbo dumbo dumbo dumbo dumbo dumbo dumbo dumbo dumbo dumbo dumbo dumbo dumbo dumbo dumbo dumbo dumbo dumbo dumbo dumbo dumbo dumbo dumbo dumbo ",
      "question_date": "2022-10-21T00:00:00.000Z",
      "asker_name": "dumbo35",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643542,
      "question_body": "yep yep yep",
      "question_date": "2022-10-21T00:00:00.000Z",
      "asker_name": "yeppers23",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643540,
      "question_body": "asds",
      "question_date": "2022-10-21T00:00:00.000Z",
      "asker_name": "asdasd",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643539,
      "question_body": "asds",
      "question_date": "2022-10-21T00:00:00.000Z",
      "asker_name": "asdasd",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643538,
      "question_body": "Yo please webpack hot load",
      "question_date": "2022-10-20T00:00:00.000Z",
      "asker_name": "canIhaveit",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643536,
      "question_body": "testpack",
      "question_date": "2022-10-20T00:00:00.000Z",
      "asker_name": "testpack45",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643535,
      "question_body": "webpack-middleware?",
      "question_date": "2022-10-20T00:00:00.000Z",
      "asker_name": "wbpackMW23",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643534,
      "question_body": "asd",
      "question_date": "2022-10-20T00:00:00.000Z",
      "asker_name": "asdasd",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643533,
      "question_body": "Wow",
      "question_date": "2022-10-20T00:00:00.000Z",
      "asker_name": "thisthingcoolman",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643532,
      "question_body": "I need more testing?",
      "question_date": "2022-10-20T00:00:00.000Z",
      "asker_name": "probablyMan245",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643531,
      "question_body": "Is this my status code?",
      "question_date": "2022-10-20T00:00:00.000Z",
      "asker_name": "statusMuncher",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643529,
      "question_body": "Too many times I looney toons my my my Grandma is lazy",
      "question_date": "2022-10-20T00:00:00.000Z",
      "asker_name": "lizardFolk",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643528,
      "question_body": "Does the sun come out?",
      "question_date": "2022-10-20T00:00:00.000Z",
      "asker_name": "sunnyBrains",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643510,
      "question_body": "questions still work?",
      "question_date": "2022-10-20T00:00:00.000Z",
      "asker_name": "myst tester",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643508,
      "question_body": "Question",
      "question_date": "2022-10-20T00:00:00.000Z",
      "asker_name": "mcquestion",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643476,
      "question_body": "Hi",
      "question_date": "2022-10-19T00:00:00.000Z",
      "asker_name": "Isthisthing",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643475,
      "question_body": "Bach",
      "question_date": "2022-10-19T00:00:00.000Z",
      "asker_name": "Hyden",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 643195,
      "question_body": "What's the best color?",
      "question_date": "2022-09-08T00:00:00.000Z",
      "asker_name": "Colors",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 642956,
      "question_body": "What's the deal with these slacks?",
      "question_date": "2022-09-01T00:00:00.000Z",
      "asker_name": "dudeBro",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 642955,
      "question_body": "What's the deal with these slacks?",
      "question_date": "2022-09-01T00:00:00.000Z",
      "asker_name": "dudeBro",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 642954,
      "question_body": "What's the deal with these slacks?",
      "question_date": "2022-09-01T00:00:00.000Z",
      "asker_name": "dudeBro",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 642537,
      "question_body": "Is the fabric more for summer or winter?",
      "question_date": "2022-07-23T00:00:00.000Z",
      "asker_name": "test",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
    }
  ]
}

let oneAnswer = {
  "id": 5989584,
  "body": "https://prod.liveshare.vsengsaas.visualstudio.com/join?D2128D9E54E54E216F7CC432A12A9E283575",
  "date": "2022-12-08T00:00:00.000Z",
  "answerer_name": "jd",
  "helpfulness": 25,
  "photos": [
    "http://res.cloudinary.com/dqaynsuqp/image/upload/v1670534895/ekuvx2gwxxpth3vmn64d.jpg",
    "http://res.cloudinary.com/dqaynsuqp/image/upload/v1670534896/edm2prdszto7wglhauwt.jpg"
  ]
}

const getQuestonsMockResolvedResponse = {
  data: longQuestions
}

const putResolvedResponse = {
  status: 204
}

const putRejectedResponse = {
  status: 400
}

let setModalOpen = () => {};

describe('Top-level Question and Answer Component', () => {
  beforeEach(() => jest.clearAllMocks());
  it('Renders the Question & Answers Section with Resolved Response', async () => {
    api.getQuestions.mockResolvedValue(getQuestonsMockResolvedResponse)
    await act( async () => render(<QnA product={product}/>));
    // screen.debug()
  });

  it('Renders the Question & Answers Section with Rejected Response', async () => {
    api.getQuestions.mockRejectedValue({})
    render(<QnA product={product}/>);
  });

  it('should click More Answered Questions, Collapse, Add A Question', async () => {
    api.getQuestions.mockResolvedValue(getQuestonsMockResolvedResponse)
    await act( async () => render(<QnA product={product}/>));
    fireEvent.click(screen.getByText('MORE ANSWERED QUESTIONS'));
    fireEvent.click(screen.getByText('COLLAPSE'));
    fireEvent.click(screen.getByText('ADD A QUESTION'));
  });

  it('should handle Load More Answers and Collapse Click', async () => {
    api.getQuestions.mockResolvedValue(getQuestonsMockResolvedResponse)
    await act( async () => render(<QnA product={product}/>));
    fireEvent.click(screen.getAllByText('LOAD MORE ANSWERS')[0]);
    fireEvent.click(screen.getAllByText('COLLAPSE')[0]);
  })

  it('should open click Add Answer', async () => {
    api.getQuestions.mockResolvedValue(getQuestonsMockResolvedResponse)
    await act( async () => render(<QnA product={product}/>));
    fireEvent.click(screen.getAllByText('Add Answer')[0]);
  })

  it('should open expanded view', async () => {
    api.getQuestions.mockResolvedValue(getQuestonsMockResolvedResponse)
    await act( async () => render(<QnA product={product}/>));
    fireEvent.click(screen.getAllByRole('img')[0]);
  })
});

it('Renders the Modal', () => {
  const placeholder = 'Ask Your Question';
  var comp = (
    <Modal setModalOpen={setModalOpen}>
      <div className='flex flex-col items-center'>
        <div className='font-thin text-xl text-netural-500'>Ask Your Question</div>
        <div className='mb-3 font-thin text-sm text-netural-500'>About the {product.name}</div>
      </div>
      <QForm setModalOpen={setModalOpen} product={product}/>
    </Modal>
  );
  const { getByText } = render(comp);
  getByText(placeholder);
})

it('Renders the Answer List', () => {
  const placeholder = 'LOAD MORE ANSWERS';
  const { getByText } = render(<AList answers={questions.results[0].answers}/>);
  getByText(placeholder);
})

it('Renders One Answer in List', () => {
  const placeholder = 'Helpful?'
  const { getByText } = render(<OneA answer={oneAnswer} key={0}/>);
  getByText(placeholder);
})

it('Renders One Question in List', () => {
  const placeholder = 'Helpful?'
  const { getByText } = render(<OneQ questionData={questions} product={product}/>);
  getByText(placeholder);
})

it('Renders Answer Form', () => {
  const placeholder = 'Email:'
  const { getByText } = render(<AForm setModalOpen={setModalOpen} question={questions.results[0]}/>);
  getByText(placeholder);
})

it('Renders Answer Form', () => {
  render(<QForm setModalOpen={setModalOpen} product={'string'}/>);
  fireEvent.click(screen.getByRole('textbox', {name: 'Nickname:'}))
  fireEvent.click(screen.getByRole('textbox', {name: 'Email:'}))
  fireEvent.click(screen.getByText('Submit'))
})

it('Renders Question Form', () => {
  const placeholder = 'Email:'
  render(<AForm setModalOpen={setModalOpen} question={'string'}/>);
  fireEvent.click(screen.getByRole('textbox', {name: 'Nickname:'}))
  fireEvent.click(screen.getByRole('textbox', {name: 'Email:'}))
  fireEvent.click(screen.getByText('Submit'))
  fireEvent.change(screen.getByRole('textbox', {name: 'Nickname:'}), {target:{value: 'test'}})
  fireEvent.change(screen.getByRole('textbox', {name: 'Email:'}), {target:{value: 'test'}})
  fireEvent.change(screen.getByPlaceholderText("Type your answer here"), {target:{value: 'test'}})
  fireEvent.click(screen.getByText('Submit'))
  fireEvent.change(screen.getByRole('textbox', {name: 'Email:'}), {target:{value: 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest'}})
  fireEvent.click(screen.getByText('Submit'))
  fireEvent.change(screen.getByRole('textbox', {name: 'Nickname:'}), {target:{value: 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest'}})
  fireEvent.click(screen.getByText('Submit'))
})