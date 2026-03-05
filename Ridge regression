In this repository we wish to study the most important ML models from scratch by building an comparative mathematical intuition of various models.

# OLS vs Ridge Regression (Mathematical Comparison)

We wish to explain each of the major ML models in a **comparative fashion**.

To build **deep mathematical intuition**, we derive the **closed-form solution** for both **Ordinary Least Squares (OLS)** and **Ridge Regression** starting from their **cost functions**.

The key idea is:

> We minimize the cost function by taking derivatives with respect to the weight vector ( w ).

---

# 1️⃣ Ordinary Least Squares (OLS)

## Step 1 — Model Definition

Linear regression model:

$$
y = Xw + \epsilon
$$

where

* (X \in \mathbb{R}^{m \times p}) → feature matrix
* (w \in \mathbb{R}^{p \times 1}) → weight vector
* (y \in \mathbb{R}^{m \times 1}) → target vector
* (m) → number of samples
* (p) → number of features

Prediction:

$$
\hat{y} = Xw
$$

---

# Step 2 — OLS Cost Function

OLS minimizes **Mean Squared Error**

$$
J(w) = \frac{1}{2}(y - Xw)^T(y - Xw)
$$

We include the (1/2) factor for **derivative convenience**.

---

# Step 3 — Expand the Quadratic Form

$$
J(w) =
\frac{1}{2}(y^Ty - y^TXw - w^TX^Ty + w^TX^TXw)
$$

Since scalars satisfy

$$
y^TXw = w^TX^Ty
$$

we obtain

$$
J(w) =
\frac{1}{2}(y^Ty - 2w^TX^Ty + w^TX^TXw)
$$

---

# Step 4 — Take Derivative w.r.t (w)

Useful matrix derivative identities:

$$
\frac{\partial}{\partial w}(w^TAw) = 2Aw
$$

$$
\frac{\partial}{\partial w}(b^Tw) = b
$$

Applying the derivative:

$$
\nabla_w J =

* X^Ty + X^TXw
  $$

---

# Step 5 — Set Gradient to Zero

To minimize:

$$

* X^Ty + X^TXw = 0
  $$

Rearranging:

$$
X^TXw = X^Ty
$$

---

# Step 6 — Solve for (w)

Multiply both sides by ((X^TX)^{-1}):

$$
w = (X^TX)^{-1}X^Ty
$$

---

# Final OLS Solution

$$
\boxed{w = (X^TX)^{-1}X^Ty}
$$

This is called the **Normal Equation**.

---

# 🚨 Where OLS Fails

OLS requires the matrix

$$
(X^TX)^{-1}
$$

to exist.

Problems arise in the following cases.

---

## Multicollinearity

When columns of (X) are linearly dependent:

$$
rank(X) < p
$$

then

$$
\det(X^TX) = 0
$$

The matrix **cannot be inverted**.

---

## High-Dimensional Case

If

$$
p > m
$$

then

$$
rank(X^TX) \le m
$$

Thus (X^TX) becomes **singular**, and OLS fails.

---

# 2️⃣ Ridge Regression

Ridge regression solves the same problem but **penalizes large weights**.

---

# Step 1 — Ridge Cost Function

$$
J(w) =
\frac{1}{2}(y - Xw)^T(y - Xw)
+
\frac{\lambda}{2}w^Tw
$$

The second term

$$
\lambda w^Tw
$$

is the **L2 regularization penalty**.

---

# Step 2 — Expand the Loss

The first term expands exactly like OLS:

$$
\frac{1}{2}(y^Ty - 2w^TX^Ty + w^TX^TXw)
$$

Adding the penalty term:

$$
\frac{\lambda}{2}w^Tw
$$

Total cost becomes:

$$
J(w) =
\frac{1}{2}(y^Ty - 2w^TX^Ty + w^TX^TXw)
+
\frac{\lambda}{2}w^Tw
$$

---

# Step 3 — Take Derivative

Derivative of the first term:

$$

* X^Ty + X^TXw
  $$

Derivative of the penalty:

$$
\lambda w
$$

Total gradient:

$$
\nabla_w J =

* X^Ty + X^TXw + \lambda w
  $$

---

# Step 4 — Set Gradient to Zero

$$

* X^Ty + X^TXw + \lambda w = 0
  $$

Rearranging:

$$
X^TXw + \lambda w = X^Ty
$$

---

# Step 5 — Factor out (w)

$$
(X^TX + \lambda I)w = X^Ty
$$

---

# Step 6 — Solve for (w)

$$
w = (X^TX + \lambda I)^{-1}X^Ty
$$

---

# Final Ridge Solution

$$
\boxed{w = (X^TX + \lambda I)^{-1}X^Ty}
$$

---

# Why Ridge Fixes Instability

Suppose eigenvalues of (X^TX) are

$$
\lambda_1, \lambda_2, ..., \lambda_p
$$

If some eigenvalues are near zero:

$$
(X^TX)^{-1}
$$

becomes unstable.

---

## Ridge Shifts Eigenvalues

Ridge modifies the matrix:

$$
X^TX + \lambda I
$$

Eigenvalues become

$$
\lambda_i + \lambda
$$

Thus

```
small eigenvalues → larger
matrix becomes invertible
solution becomes stable
```

---

# Key Mathematical Insight

| Method | Matrix Being Inverted |
| ------ | --------------------- |
| OLS    | (X^TX)                |
| Ridge  | (X^TX + \lambda I)    |

---

# One-Line Intuition

OLS solves

$$
\min ||y - Xw||^2
$$

Ridge solves

$$
\min ||y - Xw||^2 + \lambda ||w||^2
$$

which **modifies the geometry of the optimization problem** and stabilizes the matrix inversion.

---

# Important Conceptual Takeaway

Ridge **does not change the regression model**.

It changes the **optimization landscape** so that:

```
the matrix to be inverted is always well-conditioned
```

---

If you'd like, I can also show you the **best way to structure these notes in a GitHub ML-from-scratch repo** so it looks like a **research-style reference (very impressive to recruiters)**.
