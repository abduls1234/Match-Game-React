import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const activeTabClassName = isActive ? 'active' : ''

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  return (
    <li className="list-item">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
