
// Handling events - how's happening

// in the application, we also want to allow the user to interact with the application

// there's a possibility to add Event Listeners, which will be connected to Event Handlers, and manage the state of
// the components with useState

// React Core Features like Handling Events or managing the state

// the first event to handle is when the user presses the button, but before, 
// from TextInput we must handle the key strokes, so we can grab the value the user will enter which will be used to
// be added into the list of chatrooms

// chatRoomInput - this function is responsible to fetch the data of the user's input, which is the value

// addChatRoom - this function will take effect when the user will press the button, and by that, the value
// from the user's input will be grabbed and added into the chatroom list.

// in order to connect the functions, we use the Event Listening props

// onChangeText is a props exposed by React Native, which wants the function as a value, a pointer at a function

// in this case, the onChangeText will point on chatRoomInput function and pass it as a value

// not using function() as a value (with parathensis) as I intend for React-Native to execute the function whenever
// I do a change in one of the components

// as the prop is exposed, React-Native will provide as a value/parameter/input to the function, in this case, enteredChatRoom
// will be gotten automatically 

// onPress is a props which was used, in this project, to connect with the addChatRoom function, in order for the
// enteredChatRoom to be taken as a value and put in the chatRoom list 

// we need the enteredChatroom in add function, not in input function

// in a web browser, normally onClick is used, but because in apps is all about tapping and pressing, and onClick is 
// not supported, onPress would be a good solution 

//through the onPress button, the function addChatRoom will be triggered, taking the enteredText value 
// and put it on the list

// in order to get the value from textInput and be listed through the add function, I had to store the value 
// as a state, which is updated with each key stroke and will be possible to use it in other functions (add/delete)

// setting up to empty string because that would be the user's input state
// defining enteredChatText and setEnteredText (this one can update the input text) 

// in input function, I set setEnteredGoalText to update every key stroke of the text (the enteredText), 
// and will receive as a parameter

// in addChat function, I could access the state and do something with it (setting up the EnteredChatText here), 
// it will access that value by accesing the state, and then through setChatRoomText, it can be updated.

// in order to manage the list, an another state has to be added, due to having data which are changed dynamically, 
// and due to managing the list, and initially having nothing in the list, the useState will be set up with an empty array.

// naming chatRooms because the goal is to add a chatroom, and the updating function - setChatRoom

// adding the setChat into add for updating purposes, and for taking the existing ones and append a new one
// at the end, a solution would be to create a new array, starting with 3 points which represent a spread operator, standard JS code,
// to spread the chatRooms into the array so all the existing chatRoom will be kept, and then add a new chatroom through 
// enteredChatText

// passing an function to the updating state, which will be automatically triggered by React, if the current state depends on the
// previous state, and it will receive the existing state by React, so for that I turned into a arrow function, as
// a parameter to the updating state.

// note: the value will be automatically provided by React when it calls the updating state/function.

// now output the list: 

// FlatList is not looking for id, but for key, therefore in order to use id, 
// keyExtractor is needed, taking the item and index as parameters and return as item.id

// the key: Math.random().toString() will generate an unique key to each value/object, instead of using key

// by using Math.random().toString(), we don't have to define a key manually for each object.

// ScrollView vs. FlatList

// Unlike web platform, the mobile applications don't come up with default scrolling, so for that, there's a 
// core component, special built for scrolling called ScrollView, which will allow the user to scroll through the app.

// Though, for a list which can be longer and longer, it is not a good solution because ScrollView provides
// a limited space for the container. It also renders each child behind the scenes, even though it's not visible, 
// and because of that, having longer lists can cause performance issues. 

// Instead, for longer lists, a better replacement of ScrollView will be FlatList which will optimize the 
// lists, and internally it will render the objects which are ONLY visible, and all of the items which
// are offscreen will be lazily rendered and loaded just because the user needs it when it scrolls.
// by using FlatList, we no longer map the data manually, and it needs to be passed to FlatList so 
// it will run the list efficiently by only rendering what's needed, through two important props: data 
// and renderItem.

// inside FlatList, the data prop is a require prop and will refer to the data which has to be output in the list
// renderItem is a prop that wants a function as a value, a function which will tell the FlatList
// how to render the individual data items
// item => {} = will receive the item as a parameter automatically, FlatList will pass to this item

// chatInput.js and chatList.js are custom components, built in order to keep the code cleaner because 
// of the project getting bigger

// props: to the custom components, chatInput and chatList, I needed to pass some data in the chatRoomScreen page,
// and for that I used props

// using props.text as FlatList will render the item first and then it will return as a text output to the list, but
// for that it needs to be passed to ChatRoomScreen file in order to pass the data and return it as an output.

// text is the actual property which holds the object so for that I passed the itemData.item.text in renderItem props
// as a value to the text prop

// extract some markup into the ChatList component, therefore I created the function 

// because View holds the input and styling related components (and because each child component MUST have
// a parent component, in that case the View component)

// managing a state in chatInput as we do have the user's input and the button, the one the user will interact to
// output 

// the chatRoom state is managed in ChatRoomScreen.jsx, whilst the inputs are in the different component 
// (more specifically, in the custom component), to solve the solution, we can talk to the parent component
// by passing Event Handler functions through props. 

// props.onAddChat(enteredChatRoom) - expects a special props, which will be provided by parent component, which
// holds the function as a value and will be executed upon onPress

// <ChatInput onAddChat={addChatRoom} /> - set the onAddChat prop to expect to get into ChatInput component
// as we put as a value for onPress prop, it expects/wants a function to be executed, and for that, 
// I passed a function to addChat(addChatRoom) in the ChatRoomScreen, and that is addChatRoom() 

//moving the first state from ChatRoomScreen as the TextInput is in the custom component's file, therefore
// it was on the wrong place and moved into the custom component file

// the addChat will still be needed in the ChatroomScreen file, and also to make sure the data will arise in the
// addChatRoom function

// the easiest way -> to expect the enteredChatRoom as a parameter, so whenever the function is called,
// we get the enteredChatRoom and use it as text

// function addChatRoom(enteredChatRoom) is passed to onAddChat prop as a value

// and props.onAddChat is forwarded to onPress, and by onPress, which will automatically call the props.onAddChat 
// does not provide the enteredChatRoom, in order to make this sure that it will provide, 
// I added an another function to add (NOTE: there are no name clashes so it can be named differently)
// in the add function in chatInput, I execute the props.onAddChat which will receive there manually, 
// therefore the onPress prop will be connected to the addChatRoom function, and because of it receiving manually,
// I made sure that it will forward to enteredChatRoom as a value
// adding a setEnteredChatRoom to an empty string to have the possibility to clear whenever new data is written from
// the user's input, it also resets the state, and a value prop must be added to be reflected to the
// textInput as well whenever the state resets

// we use Pressable to wrap the item that should be pressable, and whenever we press any item inside the pressable,
// together with onPress prop will trigger a function that it was provided.

// EXAMPLE: if I press any item, Text or View or TextInput, which is inside the pressable component,
// it will trigger the deleteChatRoom function through onPress prop

// to the ChatList I defined an another prop called onDeleteChat={deleteChatRoom} which will be passed to the function as a value
// bind is a standard JS function which allows to preconfigure a function for future executions 

//first argument -> sets the this keys to the to-be-called function, 

//second argument -> first parameter received by the to-be-called function

// by setting to props.id, the id which I get through the props of the chatList component, is sent as a parameter value
// to the function which will receive onDeleteChat prop, which is the deleteChatRoom function

// in order to work, I had to make sure that there is an id prop on the ChatList component.

// for that, I added the id prop inside the ChatList component in ChatroomScreen 

// function deleteChatRoom(id){
    // setChatRoom(currentChatRoom => {
        // return currentChatRoom.filter((chat) => chat.id !== id); // to check if chat has the id, 
        // and if chat.id is not equal to receiving id.

        // if there's match, if it has the looking id to remove, it will turn false, 
        // which means the item will drop and a new array will no longer be continued
        
        // this currentchat is an array, will create a new array,
        // it will take a function which will return it as false or true

        // if it's true, it will be kept, if it's false, it will be dropped.
    // }); 
    
    //for updating the state, and it must be based on the old state, where it will take
    // from the old state and remove, therefore I will pass a function to this updating state
    
    // => - returning the updated state
    
    // it will be a better solution to receive the deleting item's id, because
    // this allows to uniquely identify the item and delete it
// }

