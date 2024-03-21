import React, { useState, useEffect } from "react";
import RoleInput from "./RoleInput";
import styles from "./RestakingRewardsCalculator.module.css";

interface Role {
  name: string;
  restakeAmount: number;
  jobDistribution: number;
  weight: number;
}

const RestakingRewardsCalculator: React.FC = () => {
  const [restakingProfile, setRestakingProfile] = useState("independent");
  const [totalRestake, setTotalRestake] = useState(1000);
  const [roles, setRoles] = useState<Role[]>([
    { name: "", restakeAmount: 0, jobDistribution: 0, weight: 0 },
  ]);
  const [stakingRate, setStakingRate] = useState(0.25);
  const [result, setResult] = useState<number | null>(null);

  const calculateReward = () => {
    const totalSupply = 100000000;
    const idealStakingRate = 0.25;
    const minInflation = 0.001;
    const idealInflation = 0.02;
    const decayRate = 0.05;

    const inflationRate =
      stakingRate <= idealStakingRate
        ? minInflation +
          (idealInflation - minInflation) * (stakingRate / idealStakingRate)
        : minInflation +
          (idealInflation - minInflation) *
            Math.pow(2, (idealStakingRate - stakingRate) / decayRate);

    const payout = inflationRate * totalSupply;

    const rewardSum = roles.reduce(
      (sum, role) => sum + role.weight * role.jobDistribution,
      0
    );
    const restakeFraction =
      restakingProfile === "independent"
        ? roles.reduce((sum, role) => sum + role.restakeAmount, 0) /
          totalRestake
        : 1;

    const reward =
      payout *
      (rewardSum +
        (1 - roles.reduce((sum, role) => sum + role.weight, 0)) *
          restakeFraction);

    setResult(reward);
  };

  // Recalculate reward whenever relevant states change
  useEffect(() => {
    calculateReward();
  }, [restakingProfile, totalRestake, roles, stakingRate]);

  const addRole = () =>
    setRoles([
      ...roles,
      { name: "", restakeAmount: 0, jobDistribution: 0, weight: 0 },
    ]);

  const removeRole = (index: number) =>
    setRoles(roles.filter((_, i) => i !== index));

  const updateRole = (index: number, field: keyof Role, value: string) => {
    const updatedRoles = roles.map((role, i) =>
      i === index
        ? { ...role, [field]: field === "name" ? value : Number(value) }
        : role
    );
    setRoles(updatedRoles);
  };

  return (
    <div className={styles.calcContainer}>
      {/* Restaking Profile */}
      <div className={styles.generalDetailsContainer}>
        <div>
          <label htmlFor="restakingProfile" className={styles.title}>
            Restaking Profile
            <span className={styles.label}>
              (Select between Independent and Shared profiles)
            </span>
          </label>
          <select
            id="restakingProfile"
            value={restakingProfile}
            onChange={(e) => setRestakingProfile(e.target.value)}
            className={styles.selectInput}
          >
            <option value="independent">Independent</option>
            <option value="shared">Shared</option>
          </select>
        </div>

        {/* Total Restake Amount */}
        <div>
          <label htmlFor="totalRestake" className={styles.label}>
            Total Restake Amount (TNT)
          </label>
          <input
            type="number"
            id="totalRestake"
            value={totalRestake}
            onChange={(e) => setTotalRestake(Number(e.target.value))}
            className={styles.numberInput}
            placeholder="Enter total restake amount"
            min="0"
          />
        </div>

        {/* Current Staking Rate */}
        <div>
          <label htmlFor="stakingRate" className={styles.label}>
            Current Staking Rate (e.g., 0.25 for 25%)
          </label>
          <input
            type="number"
            id="stakingRate"
            value={stakingRate}
            onChange={(e) => setStakingRate(Number(e.target.value))}
            className={styles.numberInput}
            placeholder="Enter current staking rate"
            step="0.01"
            min="0"
            max="1"
          />
        </div>
      </div>
      <div className={styles.roleInputContainer}>
        {/* Dynamic Roles Inputs  */}
        {roles.map((role, index) => (
          <RoleInput
            key={index}
            role={role}
            index={index}
            updateRole={updateRole}
            removeRole={removeRole}
          />
        ))}
        <button type="button" onClick={addRole} className={styles.addButton}>
          Add Role
        </button>
      </div>
      {/* Display the calculation result */}
      {result !== null && (
        <div className={styles.result}>
          <h3 className={styles.resultTitle}>Restaking Reward:</h3>
          <p className={styles.resultValue}>{result.toFixed(2)} TNT</p>
        </div>
      )}
    </div>
  );
};

export default RestakingRewardsCalculator;
