import styles from "./NumberTree.module.scss";
import {
  TraversalContext,
  TreeNode,
} from "../../context/TraversalContextProvider";
import { useContext } from "react";
interface NumberTreeProps {
  node: TreeNode | null;
  target: number;
}

const NumberTree = ({ node, target }: NumberTreeProps) => {
  if (!node) return null;
  const { completed, current } = useContext(TraversalContext);

  const isTargetNode = node.value === target;
  const isCurrentNode = node.value === current;

  return (
    <div className={styles.container}>
      <div
        className={`${styles.node} ${isTargetNode && styles.node_target} ${
          isCurrentNode && styles.node_current
        } ${completed && styles.node_complete}`}
      >
        {node.value}
      </div>
      <div className={styles.children}>
        {node.left && <NumberTree node={node.left} target={target} />}
        {node.right && <NumberTree node={node.right} target={target} />}
      </div>
    </div>
  );
};

export default NumberTree;
