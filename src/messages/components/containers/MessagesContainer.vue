<template>
  <MessagesList
    :messages="messages"
    :isLoading="isLoading"
    :refresh="refresh" />
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { GET_MESSAGES } from '@/messages/actions/messageActionTypes'
import { MESSAGES_MODULE } from '@/messages/store/messagesModules'
import MessagesList from '@/messages/components/presentationals/MessagesList'

export default {
  name: 'MessagesContainer',
  props: {
    lessonId: {
      required: true,
      type: String
    }
  },
  components: {
    MessagesList
  },
  computed: {
    ...mapState({
      messages: state => state[MESSAGES_MODULE].messages.items,
      isLoading: state => state[MESSAGES_MODULE].messages.isLoading
    })
  },
  methods: {
    refresh() {
      this.getLessonMessage(this.lessonId)
    },
    ...mapActions(MESSAGES_MODULE, {
      getLessonMessage: GET_MESSAGES
    })
  }
}
</script>
