Project Description:
Create a chat application focused on mobile using MEAN and socket. 
The chat is to be deleted along with the chat history when inactive for a certain period of time. 
Chat app is to be used for simple conversation.

Main purpose:
Learn socket and how to implement it into MEAN.

Challenge:
There are a lot of Socket related videos and sample chat application on the web. 
However, I wasn't able to find a properly setup tutorial online that utilizes MEAN and Socket. 
I decided to give it a try.
Because of my super short experience (< 3 mo.), there's a good chance I may not be able to complete it.
Hence, the "challenge" :)

Ideal Features:
- (Done) Login/Register
- (Done) Bcrypt password
- Create chatroom
- Display the duration of how long it's been active in live from mins to months
- Display the active members in live
- Automatically delete if inactive for an hour
- Password chat room upon creation
- Filter chatrooms by name, duration, members, etc.
- Cosmetic adjustments (i.e. how chats are displayed, time display, date breaks, etc.)
- Sort chat history by date and be able to search by word(s)

2019-07-29 Update Log
- Initial commit to git
- For the past few days, I've been stuck on a bug that continues to add a socket listener.
First message is displayed once, 2nd msg is displayed twice, 3rd msg is displayed three times, etc.
I've console logged every process and the communication between my ChatConversationComponent and server.js is happening once.
However, the io.emit from server.js to ChatConversationComponent is being triggering multiple times.
I've gone through mutliple resources on chat application from YouTube and Stack Overflow but wasn't able to find the answer to my problem.
