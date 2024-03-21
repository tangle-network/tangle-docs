import React from "react";
import styles from "./RestakingRewardsCalculator.module.css";

interface Role {
  name: string;
  restakeAmount: number;
  jobDistribution: number;
  weight: number;
}

interface RoleInputProps {
  role: Role;
  index: number;
  updateRole: (index: number, field: keyof Role, value: string) => void;
  removeRole: (index: number) => void;
}

const RoleInput: React.FC<RoleInputProps> = ({
  role,
  index,
  updateRole,
  removeRole,
}) => {
  return (
    <div className="mt-1 flex items-center space-x-2">
      <input
        type="text"
        value={role.name}
        onChange={(e) => updateRole(index, "name", e.target.value)}
        className={styles.input}
        placeholder="Role name"
      />
      {/* Repeat for restakeAmount, jobDistribution, and weight with appropriate changes */}
      <button
        type="button"
        onClick={() => removeRole(index)}
        className={styles.removeButton}
      >
        Remove
      </button>
    </div>
  );
};

export default RoleInput;
