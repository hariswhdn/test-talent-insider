import Button from '/src/_components/Button'
import Icon from '/src/_components/Icon'

export default function Modal({title, desc, setState, children}) {
  return (
    <div id="modal">
      <div>
        <div>
          <p>{title}</p>
          <p>{desc}</p>
          <Button onClick={() => setState(false)}>
            <Icon icon="close" size={28} />
          </Button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}
