import { useEffect, useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { firstTemplate } from "../../utils";
import EditableItem from "../editor/components/EditableItem";
import { Box } from "@mui/material";
import SectionTitle from "../common/SectionTitle";

export default function Editor() {
  const [items, setItems] = useState<string[]>([]);
  const [draggedItemId, setDraggedItemId] = useState<string | null>(null);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    const ids: string[] = [];
    firstTemplate.comps.forEach((itm) => {
      ids.push(itm.id);
    });
    setItems(ids);
  }, []);

  return (
    <Box width="40%" height="100vh">
      <SectionTitle sectionName={"Editor"} />
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map((id) => {
            const item = firstTemplate.comps.find((itm) => itm.id === id);
            return (
              <Box key={id}>
                {item && (
                  <EditableItem
                    key={id}
                    id={id}
                    item={item}
                    isGrabbed={id === draggedItemId}
                  />
                )}
              </Box>
            );
          })}
        </SortableContext>
      </DndContext>
    </Box>
  );

  function handleDragStart(event: any) {
    setDraggedItemId(event.active.id);
  }
  function handleDragEnd(event: any) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
    setDraggedItemId(null);
  }
}
