const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
    
    var users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Future',
            room: 'PragProg'
        },{
            id: '2',
            name: 'Present',
            room: 'React'
        },{
            id: '3',
            name: 'Past',
            room: 'PragProg'
        }];
    })

    it('Should add new user', () => {
        var users = new Users();
        var user = {
            id: '3021',
            name: 'Stefflon Don',
            room: 'Pokemon Fans'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('Should return names for PragProg room', () => {
        var userList = users.getUserList('PragProg');

        expect(userList).toEqual(["Future", "Past"])
    });

    it('Should return name for React room', () => {
        var userList = users.getUserList('React');

        expect(userList).toEqual(["Present"])
    });

    it('Should remove a user', () => {
        var userID = '1';
        var user = users.removeUser(userID);
        
        expect(user.id).toBe(userID);
        expect(users.users.length).toBe(2);
    });

    it('Should not remove a user', () => {
        var userID = '23';
        var user = users.removeUser(userID);
        
        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });
})