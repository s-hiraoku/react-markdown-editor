import { useMarkdownEditor } from './hooks/useMarkdownEditor'

function App() {
  const { editor } = useMarkdownEditor()
  return (
    <div className='p-6 w-full h-screen bg-gray-300'>
      <div className='bg-white rounded-r-lg rounded-l-lg'>
        <div ref={editor} />
      </div>
    </div>
  )
}

export default App
