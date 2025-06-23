 const [{ isOver }, drop] = useDrop({
    accept: [
      "heading", "subheading", "textbody", "textcaption",
      "textInput", "textArea", "radioButton", "checkBox",
      "dropDown", "chipSelector",
    ],
    drop: (item, monitor) => {
      if (monitor.didDrop()) return; // don’t handle nested drops

      const newItem = { id: Date.now(), type: item.type, value: "" };
       const clientOffset = monitor.getClientOffset();
      const dropIndex = getDropIndex(clientOffset); 
      setTabs(prev =>
        prev.map((tab, idx) => {
          if (idx !== activeIndex) return tab;
          return {
            ...tab,
            payload: [...(tab.payload || []),newItem ],
          };
        })
      );
    },
    collect: m => ({ isOver: m.isOver({ shallow: true }) }),
  });