<script setup lang="ts">
import { computed, reactive } from 'vue'

type FormTone = 'dark' | 'light'

const props = withDefaults(
  defineProps<{
    tone?: FormTone
    maxMessageLength?: number
    hideCompany?: boolean
    filledFields?: boolean
  }>(),
  {
    tone: 'light',
    maxMessageLength: 180,
    hideCompany: false,
    filledFields: false,
  },
)

const emit = defineEmits<{
  (e: 'submit', payload: { name: string; company: string; email: string; message: string }): void
}>()

const form = reactive({
  name: '',
  company: '',
  email: '',
  message: '',
})

const touched = reactive({
  name: false,
  company: false,
  email: false,
  message: false,
})

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const errors = computed(() => {
  const next: Partial<Record<keyof typeof form, string>> = {}

  if (!form.name.trim()) next.name = 'Name is required.'
  if (!props.hideCompany && !form.company.trim()) next.company = 'Company is required.'
  if (!form.email.trim()) next.email = 'Email is required.'
  else if (!emailRegex.test(form.email)) next.email = 'Please enter a valid email.'

  if (!form.message.trim()) next.message = 'Message is required.'
  else if (form.message.length > props.maxMessageLength) {
    next.message = `Message must be at most ${props.maxMessageLength} characters.`
  }

  return next
})

const canSubmit = computed(() => Object.keys(errors.value).length === 0)
const messageLength = computed(() => form.message.length)

const filledDark =
  'rounded-xl border border-white/10 bg-zinc-950/55 text-white placeholder:text-zinc-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50 focus-visible:ring-offset-0 focus-visible:ring-offset-transparent'

const filledLight =
  'rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40 focus-visible:ring-offset-0'

const toneInput = computed(() => {
  if (props.tone === 'light' && props.filledFields) {
    return {
      input: filledLight,
      textarea: `${filledLight} min-h-[140px]`,
      label: 'text-slate-700',
      help: 'text-slate-500',
      error: 'text-red-600',
    }
  }
  if (props.tone === 'dark' && props.filledFields) {
    return {
      input: filledDark,
      textarea: `${filledDark} min-h-[140px]`,
      label: 'text-zinc-300',
      help: 'text-zinc-500',
      error: 'text-red-300',
    }
  }
  if (props.tone === 'dark') {
    return {
      input:
        'bg-transparent border-white/20 text-white placeholder:text-white/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-0',
      textarea:
        'bg-transparent border-white/20 text-white placeholder:text-white/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-0',
      label: 'text-white/85',
      help: 'text-white/70',
      error: 'text-red-200',
    }
  }
  return {
    input:
      'bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-0',
    textarea:
      'bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-0',
    label: 'text-slate-700',
    help: 'text-slate-500',
    error: 'text-red-600',
  }
})

const onSubmit = () => {
  touched.name = true
  touched.email = true
  touched.message = true
  if (!props.hideCompany) touched.company = true
  if (!canSubmit.value) return
  emit('submit', { ...form })
}
</script>

<template>
  <form class="space-y-4" @submit.prevent="onSubmit">
    <div v-if="hideCompany" class="space-y-4">
      <div>
        <label class="block text-sm font-medium" :class="toneInput.label">Name</label>
        <input
          v-model="form.name"
          type="text"
          placeholder="Name"
          class="mt-2 w-full border px-4 py-3 text-sm"
          :class="toneInput.input"
          @blur="touched.name = true"
        />
        <p v-if="touched.name && errors.name" :class="['mt-1 text-xs', toneInput.error]">
          {{ errors.name }}
        </p>
      </div>

      <div>
        <label class="block text-sm font-medium" :class="toneInput.label">Email</label>
        <input
          v-model="form.email"
          type="email"
          placeholder="Email"
          class="mt-2 w-full border px-4 py-3 text-sm"
          :class="toneInput.input"
          @blur="touched.email = true"
        />
        <p v-if="touched.email && errors.email" :class="['mt-1 text-xs', toneInput.error]">
          {{ errors.email }}
        </p>
      </div>

      <div>
        <label class="block text-sm font-medium" :class="toneInput.label">Message</label>
        <div class="mt-2">
          <textarea
            v-model="form.message"
            rows="5"
            class="w-full resize-none border px-4 py-3 text-sm"
            :class="toneInput.textarea"
            @blur="touched.message = true"
          />
        </div>
        <div class="mt-2 flex items-center justify-between">
          <p class="text-xs" :class="toneInput.help">
            {{ messageLength }} / {{ maxMessageLength }}
          </p>
          <span v-if="touched.message && errors.message" :class="['text-xs', toneInput.error]">
            {{ errors.message }}
          </span>
        </div>
      </div>
    </div>

    <div v-else class="grid gap-4 lg:grid-cols-2">
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium" :class="toneInput.label">Name</label>
          <input
            v-model="form.name"
            type="text"
            placeholder="Name"
            class="mt-2 w-full rounded-xl border px-4 py-3 text-sm"
            :class="toneInput.input"
            @blur="touched.name = true"
          />
          <p v-if="touched.name && errors.name" :class="['mt-1 text-xs', toneInput.error]">
            {{ errors.name }}
          </p>
        </div>

        <div>
          <label class="block text-sm font-medium" :class="toneInput.label">Company / Organization</label>
          <input
            v-model="form.company"
            type="text"
            placeholder="Company / Organization"
            class="mt-2 w-full rounded-xl border px-4 py-3 text-sm"
            :class="toneInput.input"
            @blur="touched.company = true"
          />
          <p
            v-if="touched.company && errors.company"
            :class="['mt-1 text-xs', toneInput.error]"
          >
            {{ errors.company }}
          </p>
        </div>

        <div>
          <label class="block text-sm font-medium" :class="toneInput.label">Email</label>
          <input
            v-model="form.email"
            type="email"
            placeholder="Email"
            class="mt-2 w-full rounded-xl border px-4 py-3 text-sm"
            :class="toneInput.input"
            @blur="touched.email = true"
          />
          <p v-if="touched.email && errors.email" :class="['mt-1 text-xs', toneInput.error]">
            {{ errors.email }}
          </p>
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium" :class="toneInput.label">Message</label>
        <div class="mt-2">
          <textarea
            v-model="form.message"
            rows="5"
            class="w-full resize-none rounded-xl border px-4 py-3 text-sm"
            :class="toneInput.textarea"
            @blur="touched.message = true"
          />
        </div>
        <div class="mt-2 flex items-center justify-between">
          <p class="text-xs" :class="toneInput.help">
            {{ messageLength }} / {{ maxMessageLength }}
          </p>
          <span v-if="touched.message && errors.message" :class="['text-xs', toneInput.error]">
            {{ errors.message }}
          </span>
        </div>
      </div>
    </div>

    <div class="pt-2">
      <slot name="actions" />
    </div>
  </form>
</template>
