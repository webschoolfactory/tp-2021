const assert = require('assert');
const chat = require('../../chat');

describe('chat', function() {
  it('should broadcast new message', function(done) {
    const socket = {
      broadcast: {
        emit: function(type, msg) {
          assert.deepEqual(type, 'new message');
          assert.deepEqual(msg, {
            username: 'loic',
            message: 'yolo'
          });
          done();
        }
      }
    };
    socket.username = 'loic';
    const newMessage = chat.newMessage(socket);
    newMessage('yolo');
  });

  it('should show typing', function(done) {
      done(new Error('not tested'));
  });

  it('should add new user', function(done) {
    done(new Error('not tested'));
  });

  it('should not add user', function(done) {
    const socket = {
      emit: function(type, msg) {
        done(new Error('should not occured'));
      }
    };
    socket.addedUser = true;
    const addUser = chat.addUser(socket);
    addUser();
    done();
  });

  it('should stop typing', function(done) {
    done(new Error('not tested'));
  });

  it('should show disconnect', function(done) {
    done(new Error('not tested'));
  });

  it('should show not disconnect', function(done) {
    const socket = {
      broadcast: {
        emit: function(type, msg) {
          done(new Error('should not occured'));
        }
      }
    };
    socket.addedUser = false;
    const disconnect = chat.disconnect(socket);
    disconnect();
    done();
  });
});
