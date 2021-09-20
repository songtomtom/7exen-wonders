import React from 'react';
import {
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from 'reactstrap';

interface TopnavButtonsProps {
  isDropdown: boolean;
  onDropdown: () => void;
  onExpanded: () => void;
}

function TopnavButtons({
  isDropdown,
  onDropdown,
  onExpanded
}: TopnavButtonsProps) {
  return (
    <div className="tapnav-buttons ml-auto">
      <ButtonDropdown isOpen={isDropdown} toggle={onDropdown}>
        <DropdownToggle caret color="warning">
          eBooks
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>codi.ai</DropdownItem>
          <DropdownItem divider />
          <DropdownItem
            onClick={() => {
              onExpanded();
            }}
          >
            Lesson
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    </div>
  );
}

export default TopnavButtons;
