import { ExerciseFiltersProps } from "../../domain/models/interfaces/IExerciseFiltersProps";
import InputField from "../atoms/InputField";
import SelectField from "../atoms/SelectField";


export default function ExerciseFilters({
  searchTerm,
  onSearchChange,
  equipmentFilter,
  onEquipmentChange,
  className,
  inputClassName,
  selectClassName,
}: ExerciseFiltersProps) {
  return (
    <div className={className}>
      <InputField
        type="text"
        placeholder="Search exercises..."
        value={searchTerm}
        onChange={e => onSearchChange(e.target.value)}
        className={inputClassName}
      />
      <SelectField
        value={equipmentFilter}
        onChange={e => onEquipmentChange(e.target.value)}
        className={selectClassName}
        options={[
          { value: "", label: "All Equipment" },
          { value: "barbell", label: "Barbell" },
          { value: "body weight", label: "Body Weight" },
        ]}
      />
    </div>
  );
}