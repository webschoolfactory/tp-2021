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
    const socket = {
      broadcast: {
        emit: function(type, data) {
          assert.deepEqual(type, 'typing');
          assert.deepEqual(data, {
            username: 'loic'
          });
          done();
        }
      }
    };
    socket.username = 'loic';
    const typing = chat.typing(socket);
    typing('loic');
  });

  it('should add new user', function(done) {
    done(new Error('not tested'));
  });

  it('should not add user', function(done) {
    done(new Error('not tested'));
  });

  it('should stop typing', function(done) {
    done(new Error('not tested'));
  });

  it('should show disconnect', function(done) {
    done(new Error('not tested'));
  });

  it('should show not disconnect', function(done) {
    done(new Error('not tested'));
  });
});


